from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from typing import List, Dict
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, Column, Integer, String, MetaData, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()
app = FastAPI()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
Base = declarative_base()
metadata = MetaData()
chat_history = Table('chat_history', metadata,
                      Column('id', Integer, primary_key=True),
                      Column('message', String)
                      )

metadata.create_all(engine)

SessionLocal = sessionmaker(bind=engine)

active_connections: List[WebSocket] = []

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    active_connections.append(websocket)
    try:
        while True:
            data = await websocket.receive_json()
            session = SessionLocal()
            message = chat_history(message=data)
            session.add(message)
            session.commit()
            session.close()
            await broadcast(data)
    except WebSocketDisconnect:
        active_connections.remove(websocket)

async def broadcast(data: Dict):
    for connection in active_connections:
       await connection.send_json(data)

@app.get('/history')
async def get_chat_history():
     session = SessionLocal()
     messages = session.query(chat_history).all()
     session.close()
     return [message.message for message in messages]

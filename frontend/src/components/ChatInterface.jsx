import React, { useState } from 'react';

function ChatInterface({ onSendMessage, chatMessages }) {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <div className="chat-interface">
      <div className="chat-output-area">
        {chatMessages.map((message, index) => (
          <div key={index} className={`chat-message ${message.user ? 'user' : 'ai'}`}>
            {message.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input-area">
        <span className="speech-icon">Speech</span>
        <span className="upload-icons">Upload(s)</span>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="submit" className="run-button">🖌️</button>
      </form>
    </div>
  );
}

export default ChatInterface;

import React, { useState } from 'react';
import './App.css';
import PageNavigation from './components/PageNavigation';
import ChatInterface from './components/ChatInterface';
import SidePanel from './components/SidePanel';
import VisualOutput from './components/VisualOutput';
import TopToolbar from './components/TopToolbar';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [chatMessages, setChatMessages] = useState([]);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSendMessage = (message) => {
    setChatMessages([...chatMessages, { user: true, message: message }]);
    setTimeout(() => {
      setChatMessages([...chatMessages, { user: false, message: 'AI response here.' }]);
    }, 500);
  };

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="app-container">
      <TopToolbar />
      <PageNavigation
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        totalPage={25}
      />
      <div className="main-content">
        <VisualOutput currentPage={currentPage} />
        <SidePanel isOpen={isSidePanelOpen} />
        <ChatInterface onSendMessage={handleSendMessage} chatMessages={chatMessages} />
      </div>
    </div>
  );
}

export default App;

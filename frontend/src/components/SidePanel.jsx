import React from 'react';

function SidePanel({ isOpen }) {
  return (
    <div className={`side-panel ${isOpen ? 'open' : ''}`}>
      <div className="side-panel-content">
        [Character Profiles]
        [Story Arcs]
        [Locations]
        [Story History]
      </div>
    </div>
  );
}

export default SidePanel;

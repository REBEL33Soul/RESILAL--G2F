import React from 'react';

function VisualOutput({ currentPage }) {
  return (
    <div className="visual-output-area">
      <h2>Page {currentPage}</h2>
      <div className="page-border">
        <div className="panel">
          <div className="panel-border">
            <div className="panel-content">
              [Panel content: Image, text, etc]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisualOutput;

import React from 'react';

function PageNavigation({ currentPage, handlePrevPage, handleNextPage, totalPage }) {
  return (
    <div className="page-navigation">
      <button onClick={handlePrevPage} disabled={currentPage <= 1}>
        &lt; Prev Page
      </button>
      <span>{currentPage} / {totalPage}</span>
      <button onClick={handleNextPage} disabled={currentPage >= totalPage}>
        Next Page &gt;
      </button>
    </div>
  );
}

export default PageNavigation;

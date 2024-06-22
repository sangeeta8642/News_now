
// Bottom Pagination

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {pages.map(page => (
        <button 
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded text-black font-bold ${currentPage === page ? 'bg-blue-500 ' : 'bg-gray-200 '}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

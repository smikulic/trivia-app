import React from 'react';
import { FaCircle } from 'react-icons/fa';
import './Pagination.css';

interface IPaginationProps {
  totalPages: number,
  totalClickable: number,
  handlePageClick: (arg1: number) => void,
}

function Pagination({ totalPages, totalClickable, handlePageClick }: IPaginationProps) {
  return (
    <div className="pagination">
      { [...Array(totalPages)].map((item, index) => {
        const currentPage = index + 1;
        
        if (currentPage <= totalClickable) {
          return <FaCircle key={index} onClick={() => handlePageClick(currentPage)} />
        }

        return <FaCircle className="disabled" key={index} />
      })}
    </div>
  );
}

export default Pagination;

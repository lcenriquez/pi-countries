import { useEffect, useState } from "react";

export default function PaginationSelector({ array, currentPage, setCurrentPage, totalPages }) {
  return (
    <div>
      <p>Showing {array.length} items</p>
      <p>Page {currentPage} of {totalPages}</p>
      <button onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : null}>Prev</button>
      <button onClick={() => currentPage < totalPages ? setCurrentPage(currentPage + 1) : null}>Next</button>
    </div>
  );
}
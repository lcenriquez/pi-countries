import style from './PaginationSelector.module.css';

export default function PaginationSelector({ array, currentPage, setCurrentPage, totalPages }) {
  return (
    <div className={style.paginationContainer}>
      <p>Showing {array.length} items</p>
      <div className={style.navControls}>
        <button onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : null}>Prev</button>
        <p>Page {currentPage} of {totalPages}</p>
        <button onClick={() => currentPage < totalPages ? setCurrentPage(currentPage + 1) : null}>Next</button>
      </div>
    </div>
  );
}
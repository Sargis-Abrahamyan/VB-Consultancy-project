import ReactPaginate from 'react-paginate';
import styles from "./paginatePages.module.css";

const PaginatePages = ({pageCount,handlePageClick}) => {
    return (
        <div className={styles.pages}>
            <ReactPaginate
                breakLabel="..."
                nextLabel={null}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={null}
                renderOnZeroPageCount={null}
                className={`active ${styles.itemPages}`}
                activeClassName={"active" ? styles.active : null}
            />
        </div>
    );
};

export default PaginatePages;

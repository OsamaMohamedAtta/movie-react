import React from 'react';
import ReactPaginate from 'react-paginate';
import "./Pagination.css"

const Pagination = ({handlePagination}) => {
    return (
        <ReactPaginate
            previousLabel="<<"
            nextLabel=">>"
            breakLabel="..."
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            pageCount={10}
            onPageChange={handlePagination}
            containerClassName={'pagination justify-content-center mt-5'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link shadow-none'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
        />
    );
}

export default Pagination;


import React from "react";
import style from './pagination.module.css'

type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: any;
};

const Pagination = (props: PaginationProps) => {
const {count,currentPage,updateCurrentPage}= props;
  return (
    <div className={style.paginationWrapper} data-testid="pagination">
      <button
        onClick={() => {
          if (currentPage >= 1) {
            updateCurrentPage(currentPage - 1);
          }
        }}
disabled={currentPage===0 ? true : false}
data-testid="prevBtn"
      >
        Prev
      </button>

<div className={style.pageItem} data-testid="pageItem">

      {new Array(count).fill(1).map((el, index) => {
        return (
          <button
            
            key={index}
            onClick={() => updateCurrentPage(index)}

            className={currentPage === index ? (style.active) : undefined}
            style={currentPage === index ? {borderColor: "red",fontSize: "28px"} : undefined}
          >
            {index + 1}
          </button>
        );
      })}

</div>
      <button
      data-testid="nextBtn"
        onClick={() => {
          if (currentPage < count - 1) {

            updateCurrentPage(currentPage + 1);

          }
        }}
        disabled={currentPage===9? true : false}

      >
        Next
      </button>
    </div>
  );
};

export default Pagination;



import React from 'react'

import PrevButton from './PrevButton';
import NextButton from './NextButton';

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {

  return(
    <ul className="pagination">
      <PrevButton pageNumber={currentPageNumber - 1} onChange={onChange} isFirstPage={currentPageNumber === 0 ? true : false} />
      <NextButton pageNumber={currentPageNumber + 1} onChange={onChange} isLastPage={currentPageNumber === totalNumberOfPages - 1 ? true : false} />
    </ul>
  )
}

export default Pagination;
import React, { useState } from 'react'

import Table from '../../components/table';
import Pagination from '../../components/table/Pagination';
import Row from '../../components/table/Row';
import Search from '../../components/search';

const UsersTable = ({ usersList, rowsPerPage = 40 }) => {
  const [rows, setRows] = useState(usersList);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const calculateTotalNumberOfPages =  (rows) => {
    if (rowsPerPage === 0) return 0
    return Math.ceil(rows.length / rowsPerPage)
  }

  const [totalNumberOfPages, setTotalNumberOfPages] = useState(calculateTotalNumberOfPages(usersList));

  const search = (event) => {
    const text = event.target.value
    let rowsFound = usersList

    if (text) {
      rowsFound = usersList.filter((row) =>
        row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
        (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
      )
    }

    setRows(rowsFound)
    setCurrentPageNumber(0)
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound))
  }

  const changeToPageNumber = (pageNumber) => {
    setCurrentPageNumber(pageNumber)
  }
 
  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }
  const renderNameWithLink = (name, link) => {
    return (<a href={link} target='_blank'>{name}</a>);
  }

  const reshapRows = (row) => {
    return {
      name: renderNameWithLink(row.name1, row.edit_path),
      email: row.email
    }
  }
  const rowsToRender = rows.map(row => <Row key={row.per_id} row={reshapRows(row)} />).slice(...rowsInPageNumber(currentPageNumber))
  
  return(
    <div>
      <Search onSearch={search.bind(this)} />
      <Table row={rowsToRender} />
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={changeToPageNumber.bind(this)} />
    </div>
  )
}

export default UsersTable

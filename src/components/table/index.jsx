import React from 'react'

const Table = (props) => {
  const { row, columns } = props

  return (
    <table>
      <thead>{columns}</thead>
      <tbody>
        {row}
      </tbody>
    </table>
  )
}

export default Table;

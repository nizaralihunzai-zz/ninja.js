import React from 'react'


const renderRow = (row) => {
  const td = [];
  for (const key in row) {
    td.push(<td key={`td-${key}`} >{row[key]}</td>);
  }
  return td;
}

const Row = (props) => {
  const { row } = props
  return (
    <tr>
      {renderRow(row)}
    </tr>
  )
}

export default Row;

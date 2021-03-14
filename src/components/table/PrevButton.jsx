import React from 'react';



const PrevButton = (props) => {
  const { isFirstPage, pageNumber,onChange } = props;
  const click = (event) => {
    event.preventDefault()
    onChange(pageNumber)
  }

  return (
    <button disabled={isFirstPage} onClick={click}>
      {'Prev'}
    </button>
  );
}

export default PrevButton;
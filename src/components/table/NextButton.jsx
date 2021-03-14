import React from 'react';

const NextButton = (props) => {
  const { isLastPage, pageNumber,onChange } = props;

  const click = (event) => {
    event.preventDefault()
    onChange(pageNumber)
  }
  return (
    <button disabled={isLastPage} onClick={click}>
      {'Next'}
    </button>
  );
}

export default NextButton;
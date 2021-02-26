import React, { useState } from 'react';

const UserInput = () => {
  const [inputValue, setInputValue] = useState("");

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  }
  const clearInputValue = () => {
    setInputValue("");
  }

  // Conditionally creating clear button
  let createClearButton;
  if (inputValue.length > 0) {
    createClearButton = <button className="ml-2 clearButton" onClick={clearInputValue}> Clear </button>
  }

  return (
    <>
      <div className="col">
        <input type="text" placeholder="Enter a new item" value={inputValue} className="ml-4" onChange={inputOnChange} />
        {/*Printing clear button */}
        {createClearButton}

      </div>
    </>
  )
}

export default UserInput;

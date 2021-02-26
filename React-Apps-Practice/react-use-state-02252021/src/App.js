import React from 'react';
import UserInput from './UserInput';

function App() {
  return (
    <>
      <div className="container mainWrapper">
        <header className="text-center mt-2">
          <h1> React States and Hooks </h1>
          <p> useState and userInput: </p>
          <hr />
        </header>
      </div>
      <UserInput />
    </>
  );
}

export default App;

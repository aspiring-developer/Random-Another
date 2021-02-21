import React from 'react';
import Cart from './Cart';
import data from './data';

function App() {
  return (
    <>
      <div className="container text-center bg-light justify-content-center border border-silver mt-2 p-2">

      <h1> React State, Hooks, Etc. </h1>
<Cart allData={data} />
</div>
    </>
  );
}

export default App;

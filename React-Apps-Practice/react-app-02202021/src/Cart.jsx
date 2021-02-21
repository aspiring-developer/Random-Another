import React from 'react';

function Cart({allData}) {
  return (
    <>
<p>This is from "Cart" component</p>

{allData.map(singleData => {
return <div>ID: {singleData.id} Title: {singleData.title} Author: {singleData.author} </div>
})}
</>
  )
}

export default Cart;

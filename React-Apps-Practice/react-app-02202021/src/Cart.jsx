import React from 'react';

function Cart({allData}) {
  return (
    <>
<p>This is from "Cart" component</p>
<ul>
{allData.map(singleData => {
return <li>Title: {singleData.title}, Author: {singleData.author}, Image: {singleData.img} </li>
})}
</ul>
    </>
  )
}

export default Cart;

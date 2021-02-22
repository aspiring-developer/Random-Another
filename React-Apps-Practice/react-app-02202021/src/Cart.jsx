import React from 'react';

function Cart({ allData }) {

  let grandTotal = allData.reduce((total, singleData) => {
    total + singleData.quantity * singleData.price;
  })
  return (
<>
      <p>This is from "Cart" component</p>
      {allData.map(singleData => {
        let total = singleData.quantity * singleData.price;
        return (
          <div> ........................................ <br />
ID: {singleData.id} <br />
Title: {singleData.title} <br />
Author: {singleData.author} <br />
Quantity: {singleData.quantity} <br />
Price: {singleData.price} <br />
            <h5> Total: {total} </h5>
          </div>
        )
      })}
</>
  )
}

export default Cart;

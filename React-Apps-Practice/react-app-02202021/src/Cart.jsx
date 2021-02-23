import React from 'react';

function Cart({ allData }) {
let grandTotal = allData.reduce((subTotal, eachItem) => {
let grandTotalCalculation = subTotal + eachItem.quantity * eachItem.price;
return grandTotalCalculation; }, 0)

  return (
<>
      <p>This is from "Cart" component</p>
      {allData.map(singleData => {
         let total = singleData.quantity * singleData.price;
        return (
          <div key={singleData.id}> ........................................ <br />
ID: {singleData.id} <br />
Title: {singleData.title} <br />
Author: {singleData.author} <br />
Quantity: {singleData.quantity} <br />
Price: ${singleData.price} <br />

            <h5> Total: ${total} </h5>
          </div>
        )
      })}
      <h5> Grand Total: ${grandTotal} </h5>
</>
  )
}

export default Cart;

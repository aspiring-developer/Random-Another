//! Write a function that reverses an integer

function reverseInteger(num) {
  let reversedNum = 0;
  let remainder = 0;

  while (num != 0) {
    remainder = num % 10;
    reversedNum = reversedNum * 10 + remainder;
    //console.log(num + " <-- before math");
    num = Math.floor(num / 10);
    //console.log(num + " <-- after math");
  }
  return reversedNum;
}

console.log(reverseInteger(9124));

//! NOT THE BEST WAY, BUT IT IS ANOTHER WAY --- ONLY for Study Purpose
function reverseInt(receivingNum) {
  let reversed = receivingNum.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(receivingNum);
  }
  console.log("------------------------------------------ ");
  console.log(reverseInt(10594) + " --> From another Function");


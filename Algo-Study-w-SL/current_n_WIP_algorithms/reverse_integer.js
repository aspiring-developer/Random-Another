//! Write a function that reverses an integer

function reverseInteger(num) {
  let reversedNum = 0;

  while (num != 0) {
    let remainder = num % 10;
    reversedNum = reversedNum * 10 + remainder;
    console.log(num);
    num = Math.floor(num / 10);
  }
  console.log(num);
  return reversedNum;
}

console.log(reverseInteger(8563));



//! NOT THE BEST WAY, BUT IT IS ANOTHER WAY --- ONLY for Study Purpose
function reverseInt(receivingNum) {
  let reversed = receivingNum.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(receivingNum);
  }
  console.log("------------------------------------------ ");
  console.log(reverseInt(10594) + " --> From another Function");


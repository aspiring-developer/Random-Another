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




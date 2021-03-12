//TODO: Find Missing Number

/*
- Write a function
- Find the max and min number in the given array
- Find the sum of the given array elements
- Find the sum of the consecutive numbers 1 to the max number
- Find the missing number by subtracting the given numbers sum from the consecutive numbers sum
- Return result
*/
function missingNumberFinder(num) {
  //* Find Max Num
  let maxNum = -1000000;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > maxNum) {
      maxNum = num[i];
    }
  }
  //return maxNum;

  //* Find Min Num
  let minNum = 1000000;
  for (let i = 0; i < num.length; i++) {
    if (num[i] < minNum) {
      minNum = num[i];
    }
  }

  //*Finding sum of consecutive
  let sumOfConsecutive = 0;
  for (let i = minNum; i <= maxNum; i++) {
    sumOfConsecutive += i;
  }
  console.log(sumOfConsecutive)
  //return sumOfConsecutive;


  // Calling sumOfGivenNumbers from sum of given numbers
  let sumOfGiven = sumOfGivenNumbers(givenNumber);

  // Calling sumOfConsecutiveNumbers from sum of consecutive numbers
  //let sumOfConsecutive = sumOfConsecutiveNumbers(givenNumber);

  let toViewInConsole = `Max Num: ${maxNum}, Min Num: ${minNum} \n Sum of Given Numbers: ${sumOfGiven}  \n Sum of Consecutive Numbers: ${sumOfConsecutive} `;
  return toViewInConsole;
}
const givenNumber = [4, 7, 8, 3, 6];
console.log(`Result: \n ${missingNumberFinder(givenNumber)} `)


//* Find sum of given numbers
function sumOfGivenNumbers(num) {
  let sumOfGiven = 0;
  for (let i = 0; i < num.length; i++) {
    sumOfGiven += num[i];
  }
  return sumOfGiven;
}

//* Find sum of consecutive numbers in given array
//function sumOfConsecutiveNumbers(num) {
//  let sumOfConsecutive = 0;
//  for (let i = minNum; i < num.length; i++) {
//    sumOfConsecutive += num[i];
//  }
//  console.log(sumOfConsecutive)
//  //return sumOfConsecutive;
//}



const givenForMissingNumberDisplayFieldEl = document.getElementById("givenForMissingNumberDisplayField");
const missingNumberDisplayFieldEl = document.getElementById("missingNumberDisplayField");
const sumOfGivenNumberDisplayFieldEl = document.getElementById("sumOfGivenNumberDisplayField");
const sumOfNaturalNumberDisplayFieldEl = document.getElementById("sumOfNaturalNumberDisplayField");


let givenNumbersForMissingNumber = [1, 2, 3, 4, 5, 6, 7, 8, 10];
//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! Find the max number
function maxNumberFinderFunction() {
  // Declare a variable to hold the max number
  let maxNumber;
  // Find the max number
  for (i = 0; i < givenNumbersForMissingNumber.length; i++) {
    if (givenNumbersForMissingNumber[i] > 0) {
      maxNumber = givenNumbersForMissingNumber[i];
    }
  }
  console.log(maxNumber); // 10
  return maxNumber;
}
// Assign the function result in a reusable variable
let foundMaxNumber = maxNumberFinderFunction();

//! Find the sum of the given numbers
function sumOfGivenNumbersFinderFunction() {
  // Declare a variable to hold the sum of the given number
  let sumOfGivenNumbers = 0;
  // Find the sum
  for (i = 0; i < givenNumbersForMissingNumber.length; i++) {
    sumOfGivenNumbers += givenNumbersForMissingNumber[i];
}
  console.log(sumOfGivenNumbers); // 46
  return sumOfGivenNumbers;
}
let sumOfGivenNumbers = sumOfGivenNumbersFinderFunction();

//! Find the sum of the natural numbers
// FORMULA: Sum_Of_Natural_Numbers = n*(n+1)/2; // Here n is the highest number (10)
let sumOfNaturalNumbers = foundMaxNumber * (foundMaxNumber + 1) / 2;
console.log(sumOfNaturalNumbers); // 55

//! Find the missing number
let missingNumber = sumOfNaturalNumbers - sumOfGivenNumbers;
console.log(missingNumber); // 9

// Send the result to the UI for display
givenForMissingNumberDisplayFieldEl.innerText = givenNumbersForMissingNumber;
sumOfGivenNumberDisplayFieldEl.textContent = sumOfGivenNumbers;
sumOfNaturalNumberDisplayFieldEl.textContent = sumOfNaturalNumbers;
missingNumberDisplayFieldEl.innerHTML = missingNumber;

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! File path display
let filePathArea2El = document.querySelector(".filePathArea2")
let fileName2 = "./missing_number_finder.js";
filePathArea2El.innerHTML = ` CODE FILE: ${fileName2} `;
//! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const givenForMaxMinNumberDisplayFieldEl = document.getElementById("givenForMaxMinNumberDisplayField");
const maxNumberDisplayFieldEl = document.getElementById("maxNumberDisplayField");
const minNumberDisplayFieldEl = document.getElementById("minNumberDisplayField");

const givenNumbers = [23, 1, 12, 5, 7, 3, 4, 99, 101, -1];

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! Max number finder function
function maxFinderFunction() {
  // Assigning a hypothetic possibly-giving max number
  let maxNumber = -1000000;
// Looping through the given number array to iterate and search
  for(i = 0; i < givenNumbers.length; i++) {
    if(givenNumbers[i] > maxNumber) {
      maxNumber = givenNumbers[i];
    }
  }
  // Returning result after looping completion
  console.log(maxNumber);
  return maxNumber;
}

// Storing the function result in a variable
let maxNumberResult = maxFinderFunction();

// Sending the result to the UI for display
givenForMaxMinNumberDisplayFieldEl.innerHTML = givenNumbers;
maxNumberDisplayFieldEl.innerHTML = maxNumberResult;
//! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! Min number finder function
function minFinderFunction() {
  // Assigning a hypothetic possibly-giving min number
  let minNumber = 1000000;
// Looping through the given number array to iterate and search
  for(i = 0; i < givenNumbers.length; i++) {
    if(givenNumbers[i] < minNumber) {
      minNumber = givenNumbers[i];
    }
  }
  // Returning result after looping completion
  console.log(minNumber);
  return minNumber;
}

// Storing the function result in a variable
let minNumberResult = minFinderFunction();

// Sending the result to the UI for display
minNumberDisplayFieldEl.innerHTML = minNumberResult;
//! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
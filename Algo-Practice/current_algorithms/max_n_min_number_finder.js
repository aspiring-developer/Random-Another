const givenForMaxMinNumberDisplayFieldEl = document.getElementById("givenForMaxMinNumberDisplayField");
const maxNumberDisplayFieldEl = document.getElementById("maxNumberDisplayField");
const minNumberDisplayFieldEl = document.getElementById("minNumberDisplayField");

let givenNumbersForMinMax = [23, 1, 12, 5, 7, 3, 4, 99, 101, -1];

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! Max number finder function
function maxFinderFunction(receivingGivingNumber) {
  // Assigning a hypothetic possibly-giving constraint
  let maxNumber = -1000000;
// Looping through the given number array to iterate and search
  for(i = 0; i < receivingGivingNumber.length; i++) {
    if(receivingGivingNumber[i] > maxNumber) {
      maxNumber = receivingGivingNumber[i];
    }
  }
  // Returning result after looping completion
  console.log(maxNumber);
  return maxNumber;
}

// Storing the function result in a variable
let maxNumberResult = maxFinderFunction(givenNumbersForMinMax);

// Sending the result to the UI for display
givenForMaxMinNumberDisplayFieldEl.innerHTML = givenNumbersForMinMax;
maxNumberDisplayFieldEl.innerHTML = maxNumberResult;
//! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! Min number finder function
function minFinderFunction(receivingGivingNumber) {
  // Assigning a hypothetic possibly-giving constraint
  let minNumber = 1000000;
// Looping through the given number array to iterate and search
  for(i = 0; i < receivingGivingNumber.length; i++) {
    if(receivingGivingNumber[i] < minNumber) {
      minNumber = receivingGivingNumber[i];
    }
  }
  // Returning result after looping completion
  console.log(minNumber);
  return minNumber;
}

// Storing the function result in a variable
let minNumberResult = minFinderFunction(givenNumbersForMinMax);

// Sending the result to the UI for display
minNumberDisplayFieldEl.innerHTML = minNumberResult;
//! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! File path display
let filePathArea1El = document.querySelector(".filePathArea1")
let fileName1 = "./max_n_min_number_finder.js";
filePathArea1El.innerHTML = ` CODE FILE: ${fileName1} `;
//! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
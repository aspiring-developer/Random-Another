let givenStringDisplayFieldEl = document.querySelector("#givenStringDisplayField");
let reversedStringDisplayFieldEl = document.querySelector("#reversedStringDisplayField");

// Given string
let givenString = "JavaScript-Algorithm";
// Function to loop through the string of texts
function reverseStringFunction() {
  // Declare a variable to hold reversed string result later
  let reversedString = '';
  for(i = givenString.length -1; i >= 0; i--) {
    reversedString += givenString[i];
  }
  console.log(reversedString);
  return reversedString;
}
let reversedResult = reverseStringFunction();

// Send the result to the UI for display
givenStringDisplayFieldEl.innerText = givenString;
reversedStringDisplayFieldEl.innerHTML = reversedResult;

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! File path display
let filePathArea4El = document.querySelector(".filePathArea4");
let fileName4 = "./string_reversal.js";
filePathArea4El.innerHTML = ` CODE FILE: ${fileName4} `;
//! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
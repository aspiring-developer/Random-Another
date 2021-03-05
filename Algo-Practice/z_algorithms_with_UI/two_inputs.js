let firstInputEl = document.querySelector("#firstInput");
let secondInputEl = document.querySelector("#secondInput");
let userInputsSumDisplayFieldEl = document.querySelector("#userInputsSumDisplayField");
let calculateButtonEl = document.querySelector(".calculateButton");
let errorMessageDisplayEl = document.querySelector("#errorMessageDisplay");

calculateButtonEl.addEventListener("click", calculateTotal = (e) => {
  e.preventDefault();
  let firstValue = parseInt(firstInputEl.value);
  let secondValue = parseInt(secondInputEl.value);

  let sum = firstValue + secondValue;

  if (!firstValue || !secondValue) {
    console.log("Both fields require some value.");
    errorMessageDisplayEl.innerHTML = "The input fields <br /> can not be empty!";
  }

  if (isNaN(firstValue) || isNaN(secondValue)) {
    console.log("The input fields only accept numbers!");
    errorMessageDisplayEl.innerHTML = "The input fields only accept numbers! Please use any number other than a zero.";
   }

  else {
    userInputsSumDisplayFieldEl.innerHTML = sum;

    console.log("Sum: --> " + sum);
    return sum;
  }
});
















//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! File path display
let filePathArea5El = document.querySelector(".filePathArea5")
let fileName5 = "./two_inputs.js";
filePathArea5El.innerHTML = ` CODE FILE: ${fileName5} `;
//! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let firstInputEl = document.querySelector("#firstInput");
let secondInputEl = document.querySelector("#secondInput");
let userInputsSumDisplayFieldEl = document.querySelector("#userInputsSumDisplayField");
let calculateButtonEl = document.querySelector(".calculateButton");

calculateButtonEl.addEventListener("click", calculateTotal = (e) => {
e.preventDefault();
let sum = parseInt(firstInputEl.value) + parseInt(secondInputEl.value);
userInputsSumDisplayFieldEl.innerHTML = sum;
console.log(sum);
return sum;
});

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! File path display
let filePathArea5El = document.querySelector(".filePathArea5")
let fileName5 = "./two_inputs.js";
filePathArea5El.innerHTML = ` CODE FILE: ${fileName5} `;
//! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

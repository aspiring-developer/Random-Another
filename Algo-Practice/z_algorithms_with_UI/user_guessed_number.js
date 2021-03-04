let userGuessButtonEl = document.querySelector(".userGuessButton");
let givenRandomNumberDisplayFieldEl = document.querySelector("#givenRandomNumberDisplayField");
let userGuessDisplayFieldEl = document.querySelector("#userGuessDisplayField");
let resultMessageDisplayFieldEl = document.querySelector("#resultMessageDisplayField");

// Add click-event listener to the button
userGuessButtonEl.addEventListener("click", function () {
  askReceiveUserPrompt();
});

// Process a randomized number as correct answer (1 to 10)
let randomizedNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomizedNumber);
// Function to display and receive user prompt
function askReceiveUserPrompt() {
  console.log("Asking user prompt.");
  // Display prompt window to user
  let userPrompt = prompt("Guess the correct number and win prizes!")
while(userPrompt != randomizedNumber) {
  userPrompt = prompt("Your guess is wrong. Try again!")
}
  console.log(`Congratulations! The answer is right!`);
  resultMessageDisplayFieldEl.innerHTML = ` Congratulations! <br /> The answer is right! `;
  return;
}
//askReceiveUserPrompt();

// Send the result to the UI for display
givenRandomNumberDisplayFieldEl.innerText = randomizedNumber;

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! File path display
let filePathArea3El = document.querySelector(".filePathArea3")
let fileName3 = "./user_guessed_number.js";
filePathArea3El.innerHTML = ` CODE FILE: ${fileName3} `;
//! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


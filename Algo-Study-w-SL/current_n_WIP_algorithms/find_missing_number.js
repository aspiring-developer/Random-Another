//! Find missing number

//!---------------------------------------
// Find highest/max number
function maxNumFinder(receivingNumbers) {
  let maxNumber = -1000000;
  for(i = 0; i < receivingNumbers.length; i++) {
  if(receivingNumbers[i] > maxNumber) {
    maxNumber = receivingNumbers[i];
  }
   }
   return maxNumber;
  }
  let givenNumbers = [1, 3, 7, 9, 4, 6, 10, 5, 2, 11];
  let foundMaxNumber = maxNumFinder(givenNumbers);
  console.log("Found Max Number: --> " + foundMaxNumber);

  //!---------------------------------------
  // Find sum of given numbers
  function sumOfGivenNumbersFinder(receivingNumbers) {
    let sumOfGivenNumbers = 0;
  for(i = 0; i < receivingNumbers.length; i++) {
    sumOfGivenNumbers += receivingNumbers[i];
  }
  return sumOfGivenNumbers;
  }
  let foundSumOfGivenNumbers = sumOfGivenNumbersFinder(givenNumbers);
  console.log("Sum of given numbers: --> " + foundSumOfGivenNumbers);

  //!---------------------------------------
  // Find sum of consecutive numbers beginning to the highest/max number
  function sumOfConsecutiveNumbersFinder() {
    let sumOfConsecutiveNumbers = 0;
    // We know the max number, so we can use that value and loop through
  for(i = 0; i <= foundMaxNumber; i++) {
    sumOfConsecutiveNumbers += i;
  }
  return sumOfConsecutiveNumbers;
  }
  let foundSumOfConsecutiveNumbers = sumOfConsecutiveNumbersFinder();
  console.log("Sum of Consecutive numbers: --> " + foundSumOfConsecutiveNumbers);

  //!---------------------------------------
  // Find the missing number using information found above
  function missingNumberFinder() {
  let missingNumber = foundSumOfConsecutiveNumbers - foundSumOfGivenNumbers;
  return missingNumber;
  }
  let foundMissingNumber = missingNumberFinder();
  console.log(` Found missing Number: -->  ${foundMissingNumber} `);
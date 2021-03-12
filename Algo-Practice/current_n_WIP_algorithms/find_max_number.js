//! Find max number
function maxFinder(receivingNumbers) {
  let maxNumber = -1000000;
  for (i = 0; i < receivingNumbers.length; i++) {
    if(receivingNumbers[i] > maxNumber){
    maxNumber = receivingNumbers[i];
    }
  }
  console.log("Returns " + maxNumber);
  return maxNumber;
}

let givenNumbers = [-100, 1, 5, 3, 7, 40, 9, 10, 111]

let foundMaxNumber = maxFinder(givenNumbers);
console.log(` Found Max Number: -->  ${foundMaxNumber} `);


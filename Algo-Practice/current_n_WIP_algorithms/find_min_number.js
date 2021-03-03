//! Find min number
function minFinder(receivingNumbers) {
  let minNumber = 1000000;
  for (i = 0; i < receivingNumbers.length; i++) {
    if(receivingNumbers[i] < minNumber){
    minNumber = receivingNumbers[i];
    }
  }
  console.log("Returns " + minNumber);
  return minNumber;
}

let givenNumbers = [-100, 1, 5, 3, 7, 40, 9, 10, 265, 11]

let foundMinNumber = minFinder(givenNumbers);
console.log(` Found min Number: -->  ${foundMinNumber} `);
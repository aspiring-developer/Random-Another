   //! Find Max Number
  let givenNumbersForMax = [1, 3, 222, 4, 16, 5, 7, 9, 8, 10];

  // Function to find max
  let maxFinder = (possibleNumbers) => {
    // Assign a variable to hold "possibly-giving" hypothetical number
  let maxNumber = -1000000;
  // Loop the arrayParameter to find max-valued element
  for(i = 0; i < possibleNumbers.length; i++) {
    if(maxNumber < possibleNumbers[i]) {
  maxNumber = possibleNumbers[i];
    }
  }
  console.log(`Max Num ---> ${maxNumber}`);
  return maxNumber;
  }
  let foundMax = maxFinder(givenNumbersForMax);

   //! #######################################################
    //! Find Min Number
    let givenNumbersForMin = [-10, 1, 3, 222, 4, 16, -20, 5, 7, 9, 8, 10];

    // Function to find min
    let minFinder = (possibleNumbers) => {
      // Assign a variable to hold "possibly-giving" hypothetical number
    let minNumber = 1000000;
    // Loop the arrayParameter to find min-valued element
    for(i = 0; i < possibleNumbers.length; i++) {
      if(minNumber > possibleNumbers[i]) {
    minNumber = possibleNumbers[i];
      }
    }
    console.log(`Min Num ---> ${minNumber}`);
    return minNumber;
    }
    let foundMin = minFinder(givenNumbersForMin);


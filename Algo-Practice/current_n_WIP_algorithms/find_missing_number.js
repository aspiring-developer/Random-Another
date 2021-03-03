    //! Find Missing Number
    let givenForMissingNumber = [1, 3, 2, 4, 10, 6, 7, 9, 8];
    // Assume we don't have given number array yet, so find the max number first
    let maxNumberFinder = (possibleNumbers) => {
      let maxNumber = -1000000;
      for (i = 0; i < possibleNumbers.length; i++) {
        if (maxNumber < possibleNumbers[i]) {
          maxNumber = possibleNumbers[i]
        }
      }
      return maxNumber;
    }
    let foundMaxNumber = maxNumberFinder(givenForMissingNumber);
    console.log("Max Number ---> " + foundMaxNumber);

    // Find the sum of the given numbers
    let sumOfGivenNumbersFinder = (possibleNumbers) => {
      let sumOfGivenNumbers = 0;
      for (i = 0; i < possibleNumbers.length; i++) {
        sumOfGivenNumbers += possibleNumbers[i];
      }
      console.log("Sum of Given Numbers ---> " + sumOfGivenNumbers);
      return sumOfGivenNumbers;
    }
    let foundSumOfGivenNumbers = sumOfGivenNumbersFinder(givenForMissingNumber);

    // Find the sum of the consecutive natural numbers based on the found max number
    let sumOfNaturalNumbersFinder = (possibleNumbers) => {
      let sumOfNaturalNumbers = 0;
      for (i = 0; i <= possibleNumbers; i++) {
        sumOfNaturalNumbers += i;
      }
      return sumOfNaturalNumbers;
    }
    let foundSumOfNaturalNumbers = sumOfNaturalNumbersFinder(foundMaxNumber);
    console.log("Sum of natural numbers ---> " + foundSumOfNaturalNumbers);

    //FORMULA: Sum of natural number = n*(n+1)/2; (Here n is max number) // Since we already found the max number, the sum of given numbers and the sum of natural numbers, we do not need to use this formula (the code below should calculate the number)

    // Finally, find the missing number
    let missingNumber = foundSumOfNaturalNumbers - foundSumOfGivenNumbers;
    console.log("Found Missing Number ---> " + missingNumber);

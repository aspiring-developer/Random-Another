//TODO: Find Missing Number in an array
function missingNumFinder(numArray) {
// find min and max in the array

let maxInArray = Math.max.apply(Math, numArray);
let minInArray = Math.min.apply(Math, numArray);
console.log(`Max: ${maxInArray} | Min: ${minInArray}`)

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// find sum of the array numbers
function sumOfGivenFinder(numArray) {
  let sumOfGivenNumbers = 0;
  for (let i = 0; i < numArray.length; i++) {
    sumOfGivenNumbers += numArray[i];
  }
  console.log(sumOfGivenNumbers + " <--Sum of given")
  return sumOfGivenNumbers;

  }
console.log(sumOfGivenFinder(givenNumForMissing));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// find sum of the consecutive numbers that starts from min and ends to max
function sumOfConsecutiveFinder(min, max) {
  let sumOfConsecutiveNumbers = 0;
  for (let i = min; i <= max; i++) {
    sumOfConsecutiveNumbers += i;
  }
  console.log(sumOfConsecutiveNumbers + " <--Sum of consecutive")
  return sumOfConsecutiveNumbers;
  }
  console.log(sumOfConsecutiveFinder(minInArray, maxInArray));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let missingNumber = 0;
missingNumber = sumOfConsecutiveNumbers - sumOfGivenNumbers;


  return missingNumber;
}

let givenNumForMissing = [4, 7, 8, 3, 6,9];
console.log(missingNumFinder(givenNumForMissing));






//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//TODO: Find Max and Min num in an array
//function maxMinFinder(num) {
//let maxNum = -1000000;
//let minNum = 1000000;
//for (let i = 0; i < num.length; i++) {
//if(num[i] > maxNum) {
//  maxNum = num[i];
//}
//if(num[i] < minNum) {
//  minNum = num[i];
//}
//}
//return {maxNum, minNum};
//}
//let givenNum = [4, 7, 8, 3, 6];
//console.log(maxMinFinder(givenNum));

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//TODO: Given an array of integers, where all elements but one occur twice, find the unique element.

//For example:
//Given Array: givenArray = [4, 7, 4, 3, 3, 16, 9, 7, 9]
//The unique element is 16.
//* One way to solve this:
function lonelyIntFinder(arr) {
  let sortedArr = arr.sort(function(a, b) {return a - b});
  console.log(sortedArr + " <-- Sorted array for While Loop");

  let i = 0;
  while (i < sortedArr.length) {
    if (sortedArr[i] != sortedArr[i + 1]) {
      return sortedArr[i];
    }
    i = i + 2;
  }
  return -1;
}
let givenArray = [4, 7, 4, 3, 3, 16, 9, 7, 9];

let finalResult = lonelyIntFinder(givenArray);
console.log(finalResult + " <-- While Loop" );
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Another way of solving the algorithm
function lonelyIntegerFinder(receivingArray) {
  let pairedInteger = [];
  let lonelyInteger = 0;
  receivingArray.sort(function (a, b) { return a - b });
  console.log(receivingArray + " <-- Sorted array for For Loop");

  for (i = 0; i < receivingArray.length; i++) {
    if (receivingArray[i] === receivingArray[i + 1] || receivingArray[i] === receivingArray[i - 1]) {
      pairedInteger.push(receivingArray[i]);
    }
    else {
      lonelyInteger += receivingArray[i];
    }
  }
  return lonelyInteger;
}
let givenArray2 = [2, 4, 5, 1, 2, 3, 1, 5, 3,4];
console.log(lonelyIntegerFinder(givenArray2) + " <-- For Loop");
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



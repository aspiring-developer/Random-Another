/* //! Write a function to find the smallest positive integer (greater than 0) in an array
! *that does not occur in the array *constraints: 1 to 100,000 integers in the array; each element's value range is  -1,000,000 to 1,000,000  ###[1,3,6,4,1,2] should return 5 ###[1,2,3] should return 4 ###[-1,-3] should return 1*/

function nextIntegerFinder(receivingArray) {
  console.log(receivingArray + " <-- Initial array");
  let toBeFoundInteger = [];
  //receivingArray.sort();
  receivingArray.sort(function (a, b) { return a - b });
  console.log(receivingArray + " <-- Sorted array");

  for (i = 0; i < receivingArray.length; i++) {
    if (receivingArray[i] === receivingArray[i] - 1 || receivingArray[i] + 1) {
      toBeFoundInteger.push(receivingArray[i]);
    }
    else {
      toBeFoundInteger.push(0);
    }
  }
  console.log(toBeFoundInteger)
  return toBeFoundInteger;

}
let givenArray = [2, 4, 5, 1, 2, 3, 1, 5, 3];
console.log(nextIntegerFinder(givenArray));

//console.log(nextIntegerFinder(foundNumber) + " --> from outside");






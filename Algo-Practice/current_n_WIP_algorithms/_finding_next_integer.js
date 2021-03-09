/* //! Write a function to find the smallest positive integer (greater than 0) in an array
! *that does not occur in the array *constraints: 1 to 100,000 integers in the array; each element's value range is  -1,000,000 to 1,000,000  ###[1,3,6,4,1,2] should return 5 ###[1,2,3] should return 4 ###[-1,-3] should return 1*/

function nextIntegerFinder(receivingArray) {
console.log(receivingArray + " <-- Initial array");
let toBeFoundInteger = [];
//receivingArray.sort();
console.log(receivingArray + " <-- Sorted array");
// Loop and find next sequential number.
// Start from the first index and add 1 to it to find next number
for(i = 0; i < receivingArray.length; i++) {

  if(toBeFoundInteger[receivingArray[i]]) {
    toBeFoundInteger[receivingArray[i]]++;
  } else {
    toBeFoundInteger[receivingArray[i]] = 1;
  }

}
return toBeFoundInteger;

//console.log("Found Integer: --> " + thePositiveInteger);
}


let givenArray = ["1", "3", "4", "2", "1", "6"];
console.log(nextIntegerFinder(givenArray));

//console.log(nextIntegerFinder(foundNumber) + " --> from outside");






//TODO: Given an array of integers, where all elements but one occur twice, find the unique element.

//For example:
//Given Array: givenArray = [4, 7, 4, 3, 3, 16, 9, 7, 9]
//The unique element is 16.

function lonelyIntFinder(arr) {
  let lonelyInt;
  console.log(arr + " <-- Before sort");
  let sortedArr = arr.sort(function(a, b) {
     return a - b;
  });
  console.log(sortedArr + " <-- After sort");
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
console.log("Final Result:" + finalResult);




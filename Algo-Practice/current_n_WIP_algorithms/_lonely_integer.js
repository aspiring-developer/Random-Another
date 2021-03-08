//TODO: Given an array of integers, where all elements but one occur twice, find the unique element.

//For example:
//Given Array: givenArray = [1,2,3,4,3,2,1]
//The unique element is 4.

function lonelyIntFinder(arr) {
  let lonelyInt;
  console.log(arr + " <-- Before slice and sort");
  let sortedArr = arr.sort();
  console.log(sortedArr);
  let i = 0;


  while (i < sortedArr.length) {
    if (sortedArr[i] != sortedArr[i + 1]) {
      return sortedArr[i];
    }
    i = i + 2;
  }

  return -1;

}


let givenArray = [4, 6, 3, 4, 3, 3, 16, 9, 7, 9, 12, 7, 13, 111, 211];
//1,1,3,,3, 7
//let givenArray = ["1", "2", "3", "4", "3", "2", "1"];

let finalResult = lonelyIntFinder(givenArray);
console.log("Final Result:" + finalResult);



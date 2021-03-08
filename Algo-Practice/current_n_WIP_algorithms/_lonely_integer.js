//TODO: Given an array of integers, where all elements but one occur twice, find the unique element.

//For example:
//Given Array: givenArray = [1,2,3,4,3,2,1]
//The unique element is 4.

function lonelyIntFinder(arr) {
  let lonelyInt;
  console.log(arr + " <-- Before slice and sort");
  let sortedArr = arr.sort();
  console.log(arr + " <-- After slice and sort");

  for (let a = 0; a < arr.length; a++) {
    const element = arr[a];
    for (let b = a + 1; b < arr.length; b++) {
      if(element == arr[b]){
      continue;
      }

    }
    return element;

  }

}
let givenArray = [1, 1, , 3, 3, 5,5, 9];
//let givenArray = ["1", "2", "3", "4", "3", "2", "1"];

let finalResult = lonelyIntFinder(givenArray);
console.log("Final Result:" + finalResult);



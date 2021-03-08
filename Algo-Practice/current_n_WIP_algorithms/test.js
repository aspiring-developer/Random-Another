//TODO: Given an array of integers, where all elements but one occur twice, find the unique element.

//For example:
//Given Array: givenArray = [1,2,3,4,3,2,1]
//The unique element is 4.

function lonelyIntFinder(arr) {
  console.log(arr + " <-- Before slice and sort");
  let sortedArr = arr.sort();
  console.log(arr + " <-- After slice and sort");
  let repeatedInt = [];
  let lonelyInt;
  for (let i = 0; i < sortedArr.length; i++) {
   console.log("Array Element:" + sortedArr[i] + " | Index:  --> " + i);
if(sortedArr[i + 1] === sortedArr[i]) {
  repeatedInt.push(sortedArr[i]);
} else {
  lonelyInt = sortedArr[i];
  //console.log("Lonely Integer: " + sortedArr[i]);
  //console.log("Lonely Integer: " + lonelyInt);
}
}
//console.log("After push: " + repeatedInt);
  return lonelyInt;
}
let givenArray = [3, 1, 2, 2,3,4,1];
//let givenArray = ["1", "2", "3", "4", "3", "2", "1"];

let finalResult = lonelyIntFinder(givenArray);
console.log("Final Result:" + finalResult);



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//const findDuplicates = (arr) => {
//  let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
//  // JS by default uses a crappy string compare.
//  // (we use slice to clone the array so the
//  // original array won't be modified)
//  let results = [];
//  for (let i = 0; i < sorted_arr.length - 1; i++) {
//    if (sorted_arr[i + 1] == sorted_arr[i]) {
//      results.push(sorted_arr[i]);
//    }
//  }
//  return results;
//}

//let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
//console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>....
//function eliminateDuplicates(arr) {
//  var i,
//      len = arr.length,
//      out = [],
//      obj = {};

//  for (i = 0; i < len; i++) {
//    obj[arr[i]] = 0;
//  }
//  for (i in obj) {
//    out.push(i);
//  }
//  return out;
//}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

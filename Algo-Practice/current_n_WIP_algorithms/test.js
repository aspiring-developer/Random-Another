//TODO: Given an array of integers, where all elements but one occur twice, find the unique element.

//For example:
//Given Array: givenArray = [1,2,3,4,3,2,1]
//The unique element is 4.

function lonelyIntFinder(arr) {
  console.log(arr + " <-- Before sort");
  let sortedArr = arr.sort();
  console.log(arr + " <-- After sort");
  let repeatedInt = [];
  let lonelyInt = [];

  for (let i = 0; i < sortedArr.length; i++) {
  console.log("Array Element:" + sortedArr[i] + " | Index:  --> " + i);
    let currentNum = sortedArr[i];
    console.log("Current Num: " + currentNum);
    let nextNum = currentNum + 1;
    console.log("Next Num: " + nextNum);


    if (currentNum  === nextNum) {
      repeatedInt.push(sortedArr[i]);
      console.log("Repeated Integer: " + repeatedInt);
    //console.log("Next Num in if: " + nextNum);
    lonelyInt = currentNum;
    console.log("Lonely Int in if: " + lonelyInt);
    //return lonelyInt;

    }
    return lonelyInt;
    }
 }
let givenArray = [2, 3, 4, 3, 2,4,5];
//let givenArray = [2, 1, 2];

let finalResult = lonelyIntFinder(givenArray);
console.log("Final Result:" + finalResult);













//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//const findDuplicates = (arr) => {
//  let sorted_arr = arr.slice().sort();
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

//  for (i = 0; i < arr.length; i++) {
//    obj[arr[i]] = 0;
//  }
//  for (i in obj) {
//    out.push(i);
//  }
//  return out;
//}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<




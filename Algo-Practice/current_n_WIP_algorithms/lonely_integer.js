//TODO: Given an array of integers, where all elements but one occur twice, find the unique element.

//For example:
//Given Array: givenArray = [1,2,3,4,3,2,1]
//The unique element is 4.

function lonelyIntFinder(array) {
  let lonelyInt = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log("Element:" + element);
    console.log("Array Index:" + array[i]);
    lonelyInt.push(array[i])

    // Checking condition
    //  if (lonelyInt[array[i]]) {
    //    console.log(lonelyInt[array[i]]);
    //}
    console.log("LonelyInt Value:" + lonelyInt);
    return lonelyInt;
  }
}
let givenArray = [1, 2, 3, 4, 3, 2, 1];
let finalResult = lonelyIntFinder(givenArray);
console.log("Final Result:" + finalResult);

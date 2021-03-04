// Write a function that swaps two numbers in a given array

function swapNumbers(givenArray, index1, index2) {
  let temp = 0;
  temp = givenArray[index1];
  givenArray[index1] = givenArray[index2];
  givenArray[index2] = temp;
  return givenArray;
}

let arr = [8, 5, 7, 3, 2, 1]

let finalSwapped = swapNumbers(arr, 1, 2);
let finalSwapped2 = swapNumbers(arr, 5, 4);

console.log(finalSwapped);
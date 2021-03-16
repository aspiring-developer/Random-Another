//TODO: Write a function that swaps two numbers in a given array

function swapNumbers(arr, index1, index2) {
  let temp = 0;
  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

let givenArray = [8, 5, 7, 3, 2, 1]

let finalSwapped2 = swapNumbers(givenArray, 1, 2);

console.log(finalSwapped2);
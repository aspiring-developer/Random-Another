//TODO 03/09/2021: Write a function that reverses an array's elements.
function reverseArray(arr) {
  let resultedArray = [];
  for (i = arr.length - 1; i >= 0; i--) {
    resultedArray.push(arr[i]);
  }
  return resultedArray;
}



const aa = [3, 7, 44, 21, 12];
function revArr(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = 0;
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;

}

console.log(revArr(aa));

//0-> 12, 7, 44, 21, 3
//1-> 12, 21, 44, 7, 3
//2-> 12, 21, 44, 7, 3
//3-> No need to loop
//4-> No need to loop
//TODO: Compare two arrays and find unique values (element that only exists in one array):

const arrayOne = [2, 1, 4, 5, 7, 3, 8, 1, 9, 10, 12, 13, 15];
const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];

//* Comparing first array to second
function compareFirstToSecond(firstArr, secondArr) {
  result1 = [];
  for (i = 0; i < firstArr.length; i++) {
    if (secondArr.indexOf(firstArr[i]) === -1) {
      result1.push(firstArr[i]);
    }
  }
  return result1;
}
console.log("Final: --> " + compareFirstToSecond(arrayOne, arrayTwo));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Comparing second array to first
function compareSecondToFirst(firstArr, secondArr) {
  result2 = [];
  for (i = 0; i < secondArr.length; i++) {
    if (firstArr.indexOf(secondArr[i]) === -1) {
      result2.push(secondArr[i]);
    }
  }
  return result2;
}
console.log("Final: --> " + compareSecondToFirst(arrayOne, arrayTwo));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//TODO: Compare two arrays and find unique values (element that only exists in one array):

const arrayOne = [1, 4, 5, 7, 3, 8, 1, 9];
const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];

function compareArrays(firstArr, secondArr) {
notMatched = [];
matched = [];
for(i = 0; i < arrayOne.length; i++) {
if(firstArr[i] === secondArr[i]) {
  matched.push(secondArr[i]);
  console.log(matched);
  return matched;
} else {
  notMatched.push(firstArr[i])
  return notMatched;

}
//console.log(notMatched);
}

}
console.log("Final: --> " + compareArrays(arrayOne, arrayTwo));
// arrayOne[i] === arrayOne[i]
//1 -> 3, 7, 1, 12, 9, 5, 24, 16
//4 -> 3, 7, 1, 12, 9, 5, 24, 16
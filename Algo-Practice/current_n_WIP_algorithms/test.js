//TODO: Find Max and Min num in an array

function maxMinFinder(num) {
let maxNum = -1000000;
let minNum = 1000000;
for (let i = 0; i < num.length; i++) {
if(num[i] > maxNum) {
  maxNum = num[i];
}
}
return maxNum;
//return "????"
}
let givenNum = [4, 7, 8, 3, 6];
console.log(maxMinFinder(givenNum));
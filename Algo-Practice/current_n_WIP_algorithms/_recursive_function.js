//TODO: Create a function to find sum of an integer's beginning to ending values

function recursiveSum(num) {
  if (num > 0) {
    return num + recursiveSum(num - 1);
  } else {
    return 0;
  }
}
console.log("Result: --> " + recursiveSum(5));





/*
* num = 10
* num = 1,2,3,4,5,6,7,8,9,10
* num = 1+2+3+4+5+6+7+8+9+10
* num = 55
*/



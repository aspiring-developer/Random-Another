//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* Test recursion
function recursiveFunction(num) {
let recursiveSum = 0;
for(i = 0; i <= num; i++) {
if(recursiveSum <= num) {
  //recursiveSum += recursiveFunction(num )


//console.log(recursiveSum);
//recursiveSum += num[i] ;


console.log(recursiveSum);
}
}
//console.log(recursiveFunction(num));
return recursiveSum;
}

let givenNum = 10;
console.log(recursiveFunction(givenNum) + " <-- Result")
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*
num 10 -->
1+2+3+4+5+6+7+8+9+10 = 55
*/
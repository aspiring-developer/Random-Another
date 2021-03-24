//let result = []; // Initialize array!

//result[0] = 0;
//result[1] = 1;
//for (let i = 2; i <= 6; i++) {
//  // Next fibonacci number = previous + one before previous
//   result[i] = result[i - 2] + result[i - 1];
//  console.log(result[i]);
//}

var fib = [0, 1];
for (var i = fib.length; i < 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib);
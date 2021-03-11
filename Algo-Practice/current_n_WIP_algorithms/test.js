//* This test loop w/o function is working
//var i, j;
//let str1 = "Hello";
//let str2 = "Namaste";
//let strArray1 = [];
//let strArray2 = [];
//for (i = 0, j = 0; i < str1.length, j < str2.length; i++, j++) {
//  strArray1.push(str1[i]);
//  strArray2.push(str2[i]);
//}
//console.log("String 1 array: --> " + [strArray1]);
//console.log("String 2 array: --> " + [strArray2]);

//* Function trial
function anagramFinder(str1, str2) {
  var i, j;
  let strArray1 = [];
  let strArray2 = [];
  for (i = 0, j = 0; i < str1.length, j < str2.length; i++, j++) {
    strArray1.push(str1[i]);
    strArray2.push(str2[j]);
  }
  console.log("String 1 array: --> " + [strArray1]);
  console.log("String 2 array: --> " + [strArray2]);
  return { strArray1, strArray2 };

}
console.log(anagramFinder("Hello", "Namaste"));

//* STUDY THIS:
//for (var i = 0, j = 1, n = 2; i < 50, n < 50; i = i + 3, j = j + 3, n = n + 3){
//  console.log("variable i: " + i);
//  console.log("variable j: " + j);
//  console.log("variable n: " + n);
//}


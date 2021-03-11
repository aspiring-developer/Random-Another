//* This test loop w/o function is working
function anagramCheck() {
  let str1 = "hello";
  let str2 = "ohlge";
  let strArray1 = [];
  let strArray2 = [];

  // Convert str1 to array, sort and push
  let sorted1 = str1.split('');
  sorted1.sort()
  strArray1.push(sorted1);
  console.log(strArray1 + " <-- after sort");

    // Convert str1 to array, sort and push
    let sorted2 = str2.split('');
    sorted2.sort()
    strArray2.push(sorted2);
    console.log(strArray2 + " <-- after sort");

}
anagramCheck();



//for (i = 0, j = 0; i < str1.length, j < str2.length; i++, j++) {
//  strArray1.push(str1[i]);
//  //strArray2.push(str2[i]);
//  let s1 = strArray1.sort();
//  console.log(s1)

//}
//console.log("String 1 array: --> " + [strArray1]);
//console.log("String 2 array: --> " + [strArray2]);

//* Function trial
//function anagramFinder(str1, str2) {
//  let strArray1 = [];
//  let strArray2 = [];


//}
//console.log(anagramFinder("gfHezallo", "drbkkmnjs"));
//console.log(anagramFinder("gfHezallo", "Hefgolalz"));



//if(strArray1.indexOf(str2[j]) === -1 || strArray2.indexOf(str1[i]) === -1) {
//  return "False";
//}
//else {
//  return "True";
//}




//* Partially Working
//function anagramFinder(str1, str2) {
//  var i, j;
//  let strArray1 = [];
//  let strArray2 = [];
//  for (i = 0, j = 0; i < str1.length, j < str2.length; i++, j++) {
//    strArray1.push(str1[i]);
//    strArray2.push(str2[j]);
//  }
//  console.log("String 1 array: --> " + [strArray1]);
//  console.log("String 2 array: --> " + [strArray2]);
//  return { strArray1, strArray2 };

//}
//console.log(anagramFinder("Hello", "Namaste"));

//* STUDY THIS:
//for (var i = 0, j = 1, n = 2; i < 50, n < 50; i = i + 3, j = j + 3, n = n + 3){
//  console.log("variable i: " + i);
//  console.log("variable j: " + j);
//  console.log("variable n: " + n);
//}


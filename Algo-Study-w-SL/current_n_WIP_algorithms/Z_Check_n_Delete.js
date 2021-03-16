function anagramCheck(str1, str2) {
  let strArray1 = [];
  let strArray2 = [];

  // Convert str1 to array, sort and push
  let sorted1 = str1.split('');
  sorted1.sort();
  strArray1.push(sorted1);
  console.log(strArray1 + " <-- after str1 sort");

  // Convert str1 to array, sort and push
  let sorted2 = str2.split('');
  sorted2.sort();
  strArray2.push(sorted2);
  console.log(strArray2 + " <-- after str2 sort");

  for (let i = 0; i < strArray1.length; i++) {
    console.log(strArray1); //* This shows array
    //console.log(strArray1.length); //* This is not working; shows 1
    if (strArray1[i].indexOf(strArray2[i] === - 1)) {
      //if (strArray1[i] !== strArray2[i]) {
      console.log(strArray1[i].indexOf(strArray2[i]) + " <-- checking index");
      return "False";
    }
    return "True";
  }
}
console.log(anagramCheck("hello", "ohlle"));

/* "hello"  "ohlle"   "ohgge" */



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! IGNORE CODES BELOW
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


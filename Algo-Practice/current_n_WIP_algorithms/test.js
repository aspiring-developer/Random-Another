function isAnagram(str1, str2) {
  let str1ToArray = [];
  let str2ToArray = [];

  //for (let i = 0, j = 0; i < str1.length, j < str2.length; i++, j++){
  for (let i = 0; i < str2.length; i++){
    //console.log("variable i: " + i);
    //console.log("variable j: " + j);

  //str1ToArray.push(str1[i]);
str2ToArray.push(str2[i]);
  }
  return str2ToArray;
}
  let givenArray = ["hello", "namaste"];
  console.log(isAnagram(givenArray));


//* STUDY THIS:
//for (var i = 0, j = 1, n = 2; i < 50, n < 50; i = i + 3, j = j + 3, n = n + 3){
//  console.log("variable i: " + i);
//  console.log("variable j: " + j);
//  console.log("variable n: " + n);
//}
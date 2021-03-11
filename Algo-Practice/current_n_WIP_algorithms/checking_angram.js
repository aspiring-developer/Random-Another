// Find if the given string is anagram
// keep  // peke  // eekp

function isAnagram(arr) {
  let convertedArray1 = [];
  let convertedArray2 = [];


  //* First Loop to sort array of first string
  for (i = 0; i < arr[0].length; i++) {
    convertedArray1.push(arr[0][i]);
  }
  let sorted1 = convertedArray1.sort();
  console.log(sorted1 + " <-- sorted1");

  //* Second Loop to sort array of second string
  for (j = 0; j < arr[1].length; j++) {
    convertedArray2.push(arr[1][j]);
  }
  let sorted2 = convertedArray2.sort();
  console.log(sorted2 + " <-- sorted2");

let newArr = [sorted1, sorted2];

  //* Now, comparing both sorted arrays
  if (newArr[0] === newArr[1]) {
    return true;
  } else {
    return false;
  }
}

let givenArray = ["keep", "keep"];
console.log(isAnagram(givenArray) + " <-- Result");



//TODO: For reference purpose
//Declare 2 arrays
//use for loop to insert into arrays
//Sort both arrays

//How to convert string to char array
//How to sort an array


//let str1Arr= ['k','e', 'e', 'p'];
//let str2Arr= ['p','e', 'k', 'a'];

//let sortedArr1= ['e','e', 'k', 'p'];
//let sortedArr2= ['a','e', 'k', 'p'];

////use for loop to compare
//if(sortedArr1[i] != sortedArr2[i]){

//}

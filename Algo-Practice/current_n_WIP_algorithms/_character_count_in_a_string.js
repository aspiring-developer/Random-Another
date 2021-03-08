function countCharacter(str) {
  let charCount = [];
  for (i = 0; i < str.length; i++) {
    let eachChar = str[i];

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    if (charCount[eachChar] > 0) {
      charCount[eachChar]++;
    } else {
      charCount[eachChar] = 1;
    }
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  }
  return charCount;
}

console.log(countCharacter("javascript"));




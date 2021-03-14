//TODO: Vowel and Consonant <Finder></Finder>

function vowelFinder(str, vowels) {
  let foundVowels = [];
  //let strArr = Array.from(str);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr.indexOf(vowels[i]) !== -1) {
      foundVowels.push(vowels[i]);
    }
  }
  console.log(foundVowels + " <--foundVowels outside for")
  return foundVowels;
}
let givenVowels = ["a", "e", "i", "o", "u"];
let givenString = "You tea";
//let givenString = ["y", "o", "u", "t", "e", "a"];
console.log(vowelFinder(givenString, givenVowels) + " <--Result");


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
//* Working with both direct arrays
//function vowelFinder(str, vowels) {
//  let foundVowels = [];
//  //let str = Array.from(str);
//  for (let i = 0; i < str.length; i++) {
//    if (str.indexOf(vowels[i]) !== -1) {
//      foundVowels.push(vowels[i]);
//    }
//  }
//  console.log(foundVowels + " <--foundVowels outside for")
//  return foundVowels;
//}
//let givenVowels = ["a", "e", "i", "o", "u"];
////let givenString = "You tea";
//let givenString = ["y", "o", "u", "t", "e", "a"];
//console.log(vowelFinder(givenString, givenVowels) + " <--Result");
// Function to loop through the givenString
function consonantFinder(possibleString) {
  let consonantCollection = '';

  for (i = 0; i < possibleString.length; i++) {
    let takenChar = possibleString[i];
    if (takenChar !== 'a' && takenChar !== 'e' && takenChar !== 'i' && takenChar !== 'o' && takenChar !== 'u') {
    consonantCollection += takenChar;
  }
}
  return consonantCollection;
}
//let givenString = "your job is to find each vowel and consonant from this string"
let givenString = "not all consonants here";

let foundConsonant = consonantFinder(givenString);
console.log("Found Consonants: --> " + foundConsonant);


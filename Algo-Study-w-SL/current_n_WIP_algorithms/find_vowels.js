// Function to loop through the givenString
function vowelFinder(possibleString) {
  let vowelCollection = '';
  for (i = 0; i < possibleString.length; i++) {
    let takenChar = possibleString[i];

    if (takenChar === 'a' || takenChar === 'e' || takenChar === 'i' || takenChar === 'o' || takenChar === 'u')
      vowelCollection += takenChar;
  }
  return vowelCollection;
}
//let givenString = "your job is to find each vowel and consonant from this string"
let givenString = "not all vowels here";

let foundVowels = vowelFinder(givenString);
console.log("Found Vowels: --> " + foundVowels);



//TODO: Write a function that takes string as an input and returns the vowels reversed.

function vowelReversed(str) {
  let foundVowels = [];
  let vowels = ['a', 'o', 'i', 'e', 'u'];
  for (i = 0; i < str.length; i++) {
    if (str[i] === vowels[i]) {
      foundVowels.push(str[i]);
      console.log('foundVowels: --> ' + foundVowels);
    }
  }
console.log('foundVowels: --> ' + foundVowels);
  return foundVowels;
}
console.log("Result: --> " +  vowelReversed("hello"));

//TODO: Write a function that takes string as an input and returns the vowels reversed.

function vowelReversed(str) {
  let foundVowels1 = [];
  let vowels = ['a', 'e', 'o', 'i', 'u'];
  for (i = 0; i < str.length; i++) {
    if (str.indexOf(vowels[i]) > -1) {
      foundVowels1.push(str[i]);
      //console.log('foundVowels: --> ' + foundVowels1);
    }
    console.log('foundVowels: --> ' + foundVowels1);
  }
console.log('foundVowels: --> ' + foundVowels1);
  return foundVowels1;
}
console.log("Result: --> " +  vowelReversed("hello"));

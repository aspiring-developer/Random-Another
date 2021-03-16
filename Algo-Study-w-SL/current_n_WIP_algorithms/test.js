//TODO: Find if the given word is a palindrome or not

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function palindromeFinder(word) {
  let isPalindrome;
  let reversedWord;

  for (let i = word.length; i >= 0; i--) {
    reversedWord += word[i];
    console.log(reversedWord + " <--Reversed Word");
    if (word[i] === reversedWord[i]) {
      console.log(word[i]);

      isPalindrome = true;
    } else {
      console.log(reversedWord[i]);

      isPalindrome = false;
    }

  }
  return isPalindrome;
}
let givenWord = "abcd";
console.log(palindromeFinder(givenWord));

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


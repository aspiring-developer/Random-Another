//Find first non-repeating character in a string

function firstLonelyChar(str) {
  let foundCharacter;
  for (let i = 0; i < str.length; i++) {
    foundCharacter = str.charAt(i);
    if (str.indexOf(foundCharacter) === i && str.indexOf(foundCharacter, i + 1) === -1) {
      console.log(foundCharacter);
      return foundCharacter;
    }
    else {
      return null;
    }
  }

}
let givenString = "bbaargh";
console.log(`${firstLonelyChar(givenString)} <-- Result `);




//apple -> a
//str.indexOf('a', 1)
//var one = 0;
//var two = str.indexOf('a', 0+1);
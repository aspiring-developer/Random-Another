//TODO: Find first non-repeating character in a string

function firstLonelyChar(str) {
  let foundCharacter;

  for (let i = 0; i < str.length; i++) {
    //console.log(str.charAt(i) + " <--CharAt value");
    foundCharacter = str.charAt(i); //b

    if (str.indexOf(foundCharacter) === i && str.indexOf(foundCharacter, i + 1) === -1) {

      // indexOF => 1 === i = 1   && indexOf = -1 === -1

      console.log("...............\n" + foundCharacter + " <--Found Character" + "\n...............");
      return foundCharacter;
    }
    //else {
    //  return null;
    //}
  }
  return null;
}

let givenString = "bbaarrghh";
console.log(` ${firstLonelyChar(givenString)} <--Final Result `);











//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//apple -> a
//str.indexOf('a', 1)
//var one = 0;
//var two = str.indexOf('a', 0+1);
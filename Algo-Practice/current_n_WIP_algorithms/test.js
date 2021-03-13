//TODO: Find first non-repeating character in a string

function firstLonelyChar(str) {
  let foundCharacter;

  for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i) + " <--CharAt value");
    foundCharacter = str.charAt(i);

    if (str.indexOf(foundCharacter) === i && str.indexOf(foundCharacter, i + 1) === -1) {
      console.log("...............\n" + foundCharacter + " <--Found Character" + "\n...............");
      return foundCharacter;
    }
    //else {
    //  return null;
    //}
  }
  return null;
}

let givenString = "bbaargh";
console.log(` ${firstLonelyChar(givenString)} <--Final Result `);





//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//* WORKING CODES BELOW
//function firstLonelyChar(str) {
//  let foundCharacter;
//  for (let i = 0; i < str.length; i++) {
//    console.log(str.charAt(i));

//    foundCharacter = str.charAt(i);
//   // console.log(str.charAt(i));
//    if (str.indexOf(foundCharacter) === i && str.indexOf(foundCharacter, i + 1) === -1) {
//      //console.log(foundCharacter);
//      return foundCharacter;
//    }
//    //else {
//    //  return null;
//    //}
//  }
//  return null;
//}
//let givenString = "bbaargh";
//console.log(` ${firstLonelyChar(givenString)} <--Result `);


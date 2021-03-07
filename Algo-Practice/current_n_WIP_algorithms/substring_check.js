//TODO: Check if a substring is inside a string --> Use built-in method
//function findSubStr(str, subStr) {
//  if(str.includes(subStr)) {
//    return true;
//  } else {
//    return false;
//  }
//}
//let result = findSubStr("hello", "llo");
//console.log(result + " <-- Built-in method ");


//TODO: Check if a substring is inside a string --> Do not use built-in method
function findSubStr1(str1, subStr1) {
  var result;
  for (i = 0; i < str1.length; i++) {
    var oneChar = str1[i]; //a
    if (subStr1.startsWith(oneChar)) {
      if (compareStrings(subStr1, (str1.substring(str1.indexOf(oneChar), subStr1.length)))) {
        return true;
      }else{
        result = false;
      }
    }
  }
  return result;
}
console.log("Find Substr: " + findSubStr1("abcde", "cde"))

// Comparing two strings
function compareStrings(str3, str4) {
  var result = true;
  for (let i = 0; i < str3.length; i++) {
    if (str3.charAt(i) !== str4.charAt(i)) {
      result = false;
    }
  }
  return result;
}

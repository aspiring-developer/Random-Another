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

//abcdfcde
//cde

//TODO: Check if a substring is inside a string --> Do not use built-in method
function findSubStr1(str1, subStr1) {
  var result;
  for (i = 0; i < str1.length; i++) {
    var oneChar = str1[i];
    if (subStr1.startsWith(oneChar)) {
      let s1 = str1.substring(i, i + subStr1.length);
      if (subStr1.localeCompare(s1) == 0) {
        return true;
      } else {
        result = false;
      }
    }
  }
  return result;
}
//console.log("Find Substr: " + findSubStr1("ffcde", "fcde"))
//console.log("Comparison is: "+"abcd".localeCompare("abcd"));
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


let a = "abcdf";
let b = "cde";

let c = a.substring(2, 2 + b.length);
console.log(c);
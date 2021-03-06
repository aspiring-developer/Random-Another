//TODO: Check if a substring is inside a string

// Using built-in method
function findSubStr(str, subStr) {
  if(str.includes(subStr)) {
    return true;
  } else {
    return false;
  }
}
let result = findSubStr("hello", "llo");
console.log(result + " <-- Built-in method ");

// No built-in method
function findSubStr1(str1, subStr1) {
  console.log(str1);
  console.log(subStr1);
if(str1.length === subStr1) {
  return true;
} else {
  return false;
}

  }
  let result1 = findSubStr1("hello", "llo");
  console.log(result1 + " <-- Non built-in");


//TODO: Check if a substring is inside a string

function findSubStr(str, subStr) {
  if(str.includes(subStr)) {
    return true;
  } else {
    return false;
  }
}
let result = findSubStr("hello", "llo");
console.log(result);




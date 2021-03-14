let givenNumber = [4, 7, 8, 3, 6];
//let convertedGivenNumber = parseInt(givenNumber);
//console.log(convertedGivenNumber);
//console.log(convertedGivenNumber)
console.log("* " + typeof (givenNumber) + " <--Array data type ");
console.log("* " + typeof (givenNumber[0]) + " <--Array element data type ");
console.log("* " + Math.max(givenNumber) + " <--Max using variable name ");
console.log("* " + Math.max(4, 7, 8, 3, 6) + " <--Max using direct numbers ");
console.log("* " + Math.min(givenNumber) + " <--Min using variable name ");
console.log("* " + Math.min(4, 7, 8, 3, 6) + " <--Min using direct numbers ");

console.log("* " + Math.max.apply(Math, givenNumber) + " <--Max using .apply method with Math param ");
console.log("* " + Math.min.apply(Math, givenNumber) + " <--Min using .apply method with Math param ");


// Execution Context
function test() {
  function a() {
    b();
    console.log("inside a()")
  }

  function b() {
      console.log(d + " --< var d inside b()")
  }
  a();
  var d = "Hello from d"
  console.log("outside a() and b(), but inside main function")

}
console.log(test() + " <--Test Function")


// Execution Context
//function a() {
//  b();
//  var c;
//}

//function b() {
//  var d;
//}
//a();
//var d;

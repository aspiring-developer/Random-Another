//! Write a function that reverses an integer

function reverseInteger(receivingInteger) {
receivingInteger =  receivingInteger.toString();
//console.log("Initial Receiving Integer: --> " + receivingInteger);
let reversedInteger = '0';
reversedInteger = receivingInteger.toString() % 10;
//console.log("1st Reversed Integer: --> " + reversedInteger);

receivingInteger = receivingInteger - (receivingInteger % 10);
receivingInteger = receivingInteger / 10;
//console.log("Remaining Receiving Integer After Step-1: --> " + receivingInteger);

let newReversedInteger = receivingInteger % 10;
newReversedInteger.toString();
//console.log("2nd Reversed Integer: --> " + newReversedInteger);

reversedInteger += newReversedInteger.toString();
//console.log("Reversed Integer After Step-2: --> " + reversedInteger);

let newReversedInteger2 = receivingInteger - (receivingInteger % 10) ;
newReversedInteger2 = newReversedInteger2 / 10;
//console.log("Last Reversed Integer: --> " + newReversedInteger2);

reversedInteger += newReversedInteger2;
console.log("Result: --> " + reversedInteger);
return reversedInteger;

}
//reverseInteger(682);
//let reversedResult = reverseInteger(682);
//console.log("Reversed Result: --> " + reversedResult);




// 983 --> 389
//num = 983
//reverse = 0;

//983%10 = 3
//983/10 = 98

//reverse +=3

//2nd step:

//98%10 = 8
//98/10 = 9

//reverse += (reverse*10)+8

//num < 10 => reverse*10+9
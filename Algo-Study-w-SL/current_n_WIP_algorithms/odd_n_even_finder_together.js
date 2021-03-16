//TODO: Find Odd and Even Numbers from given array

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function oddNumberFinder(num) {
  let oddNumbers = [];
  let evenNumbers = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) {
      oddNumbers.push(num[i]);
    }
    else {
      evenNumbers.push(num[i]);
    }
  }
  let result = {Odds: oddNumbers, Evens: evenNumbers};
  return result;
}
let givenNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(oddNumberFinder(givenNumber));

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
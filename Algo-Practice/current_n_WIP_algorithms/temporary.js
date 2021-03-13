var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;
console.log("* " + fruits.length + " <--Array length"); // the length of fruits is 4
console.log("* " + fruits.indexOf("Apple") + " <--Element index"); // the index of "Apple" is 2
console.log("* " + fruits[fruits.length -1] + " <--Last Element"); // the last element is "Mango"

fruits.forEach(function(eachItem) {   // extracts each item
  console.log("-- " + eachItem + " <--Each Item");
})

fruits.push("Guava", "Cherry") // adds new items at the end
console.table("* " + fruits + " <--Adds 'Guava' and 'Cherry' ") // prints items and their index in a table
fruits.unshift("Papaya", "Raspberry") // adds new items at the beginning
console.log("* " + "Adds 'Papaya'and 'Raspberry' --> " + fruits) // prints items and their index in a table

fruits.pop("Guava") // removes an item from the end
console.table("* " + fruits + " <--Removes 'Cherry' from the end ") // prints items and their index in a table
fruits.unshift("Blueberry") // adds a new item at the beginning
console.log("* " + "Adds 'Blueberry' at the beginning--> " + fruits) // prints items and their index in a table

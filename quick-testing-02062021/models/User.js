let usersCollection = require("../db");
let User = function(formData) {
  this.userInput = formData;
  this.errorMessage = [];
}

User.prototype.registerUser = function() {
 usersCollection.collection("collection02062021").insertOne(this.userInput);
}

module.exports = User;
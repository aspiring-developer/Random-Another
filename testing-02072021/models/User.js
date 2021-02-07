let userCollection = require('../db');

let User = function(formData) {
  this.userInput = formData;
  this.errorMessage = [];
}

User.prototype.registerUser = function() {
   userCollection.collection("usersInUserCredentialApp").insertOne(this.userInput);
}

module.exports = User;
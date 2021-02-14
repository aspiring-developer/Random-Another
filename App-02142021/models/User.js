const userCollections = require("../db");

let User = function(formData) {
  this.userInput = formData;
  this.errorMessages = [];
}

User.prototype.registerUser = function() {
let user = new User(req.body);
userCollections.collection("usersInUserCredentialApp").insertOne({'username': this.userInput.username, 'email': this.userInput.email, 'password': this.userInput.password});
console.log(user + "It is from User.js registerUser function.");
}

module.exports = User;
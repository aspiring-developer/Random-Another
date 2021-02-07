let usersCollection = require("../db");

let User = function(formData) {
  this.userInput = formData;
 // this.errorMessage = [];
}

User.prototype.registerUser = function() {
  usersCollection.collection("usersInAdvancedApp").insertOne(this.userInput);

}

module.exports = User;
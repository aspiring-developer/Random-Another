const userCollections = require("../db");
let User = function(formData) {
  this.userInput = formData;
  this.errorMessages = [];
}

User.prototype.registerUser = function() {
userCollections.collection("collection-02142021").insertOne(this.userInput);
}

module.exports = User;
let express = require("express");
let mongodb = require("mongodb");

let User = function(formData) {
  this.userInput = formData;
  this.errorMessage = [];
}

User.prototype.registerUser = function(req, res) {
  console.log("registerUser function in User model working.")
}

module.exports = User;
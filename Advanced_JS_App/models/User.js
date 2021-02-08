const bcrypt = require("bcryptjs");
const usersCollection = require('../db').db();
let validator = require("validator");

let User = function (formData) {
  this.userInput = formData;
  this.errorMessages = [];
}

User.prototype.cleanUp = function () {
  if (typeof (this.userInput.username) != "string") { this.userInput.username = "" };
  if (typeof (this.userInput.email) != "string") { this.userInput.email = "" };
  if (typeof (this.userInput.password) != "string") { this.userInput.password = "" };

  this.userInput = {
    username: this.userInput.username.trim().toLowerCase(),
    email: this.userInput.email.trim().toLowerCase(),
    password: this.userInput.password
  }
}

User.prototype.validate = function () {
  if (this.userInput.username == "") { this.errorMessages.push("You must provide a username") };
  if (!validator.isEmail(this.userInput.email)) { this.errorMessages.push("You must provide a valid email") };
  if (this.userInput.password == "") { this.errorMessages.push("You must provide a password") };
  if (this.userInput.password.length > 0 && this.userInput.password.length < 6) {
    this.errorMessages.push("Password must be at least 6 characters long!")
  };
  if (this.userInput.password.length > 50) {
    this.errorMessages.push("Password must not exceed 50 characters!")
  };
  if (this.userInput.username.length > 0 && this.userInput.password.length < 3) {
    this.errorMessages.push("Username must be at least 3 characters long!")
  };
  if (this.userInput.username.length > 20) {
    this.errorMessages.push("Username must not exceed 20 characters!")
  };
  if (this.userInput.username != "" && !validator.isAlphanumeric(this.userInput.username)) {
    this.errorMessages.push("Username can only contain letters and numbers!")
  };
}

User.prototype.registerUser = function () {
  this.cleanUp();
  this.validate();

  if (!this.errorMessages.length) {
    let salt = bcrypt.genSaltSync(10);
    this.userInput.password = bcrypt.hashSync(this.userInput.password, salt);
    usersCollection.collection("usersInAdvancedApp").insertOne(this.userInput);
  }
}

User.prototype.loginUser = function () {
  return new Promise((resolve, reject) => {
    this.cleanUp();
    usersCollection.collection("usersInAdvancedApp").findOne({ username: this.userInput.username}).then((attemptedUser) => {
      if(attemptedUser && bcrypt.compareSync(this.userInput.password, attemptedUser.password)) {
          resolve("Successfully login!");
        } else {
         reject("Invalid username or password!");
        }
    }).catch(function() {
      reject("Please try again later");
    })
  })
}

module.exports = User;

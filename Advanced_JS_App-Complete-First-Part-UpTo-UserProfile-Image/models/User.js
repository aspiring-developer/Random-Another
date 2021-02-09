const bcrypt = require("bcryptjs");
const usersCollection = require('../db').db();
let validator = require("validator");
let md5 = require("md5");

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
return new Promise(async (resolve, reject) => {
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
  // Checking if the username already exists or not
  if (this.userInput.username.length > 2 && this.userInput.username.length < 21 && validator.isAlphanumeric(this.userInput.username)) {
    let usernameExists = await usersCollection.collection("usersInAdvancedApp").findOne({ username: this.userInput.username });
    if (usernameExists) { this.errorMessages.push("The username is already taken; use a unique username.") }
  };
   // Checking if the email already exists or not
  if(validator.isEmail(this.userInput.email)) {
    let emailExists = await usersCollection.collection("usersInAdvancedApp").findOne({email: this.userInput.email});
    if(emailExists) {this.errorMessages.push("The email is already in use, so use another one!")};
  };
  resolve();
})
}

User.prototype.registerUser = function () {
  return new Promise(async (resolve, reject) => {
  this.cleanUp();
  await this.validate();
  if (!this.errorMessages.length) {
    let salt = bcrypt.genSaltSync(10);
    this.userInput.password = bcrypt.hashSync(this.userInput.password, salt);
    await usersCollection.collection("usersInAdvancedApp").insertOne(this.userInput);
    this.getAvatar();
    resolve();
      } else {
        reject(this.errorMessages);
      }
})
}

User.prototype.loginUser = function () {
  return new Promise((resolve, reject) => {
    this.cleanUp();
    usersCollection.collection("usersInAdvancedApp").findOne({ username: this.userInput.username }).then((attemptedUser) => {
      if (attemptedUser && bcrypt.compareSync(this.userInput.password, attemptedUser.password)) {
        this.userInput = attemptedUser;
        this.getAvatar();
        resolve("Successfully login!");
      } else {
        reject("Invalid username or password!");
      }
    }).catch(function () {
      reject("Please try again later");
    })
  })
}

User.prototype.getAvatar = function() {
  this.avatar = `https://gravatar.com/avatar/${md5(this.userInput.email)}?s=128`;
}

module.exports = User;

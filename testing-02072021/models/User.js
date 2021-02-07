let userCollection = require('../db');
const bcrypt = require('bcryptjs');
let User = function (formData) {
  this.userInput = formData;
  this.errorMessage = ["ERROR HAPPENED!!!!!!!!!!!!!"];
}

User.prototype.registerUser = function () {
  let salt = bcrypt.genSaltSync(10);
  this.userInput.password = bcrypt.hashSync(this.userInput.password, salt);
  userCollection.collection("usersInUserCredentialApp").insertOne(this.userInput);
}

User.prototype.loginUser = function () {
  return new Promise((resolve, reject) => {
    userCollection.collection("usersInUserCredentialApp").findOne({ username: this.userInput.username }).then((attemptedUser) => {
      //if (attemptedUser && attemptedUser.password == this.userInput.password) {
        if(attemptedUser && bcrypt.compareSync(this.userInput.password, attemptedUser.password)) {
        resolve("Successfully login!")
    } else {
        reject("Invalid username or password!");
      }
    }).catch(function () {
      reject("Please try again later!");
    })
  })

}

module.exports = User;
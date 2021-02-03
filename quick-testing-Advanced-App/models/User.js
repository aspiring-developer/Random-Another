let usersCollection = require("../db");
let User = function(formData) {
this.userInput = formData;
this.errorMessage = [];
}

User.prototype.registerUser = function() {
  usersCollection.collection("usersInUserCredentialApp").insertOne(this.userInput);

}

User.prototype.loginUser = function () {
  return new Promise((resolve, reject) => {
    this.cleanUp();
    usersCollection.collection("usersInAdvancedApp").findOne({ username: this.userInput.username}).then((attemptedUser) => {
      if(attemptedUser && attemptedUser.password == this.userInput.password) {
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
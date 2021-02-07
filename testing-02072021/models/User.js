let userCollection = require('../db');

let User = function(formData) {
  this.userInput = formData;
  this.errorMessage = ["ERROR HAPPENED!!!!!!!!!!!!!"];
}

User.prototype.registerUser = function() {
   userCollection.collection("usersInUserCredentialApp").insertOne(this.userInput);
}

User.prototype.loginUser = function() {
  return new Promise((resolve, reject) => {
userCollection.collection("usersInUserCredentialApp").findOne({username: this.userInput.username}).then((attemptedUser) => {
if(attemptedUser && attemptedUser.password == this.userInput.password) {resolve("Successfully login!")} else {
  reject("Invalid username or password!");
}
}).catch(function() {
reject("Please try again later!");
})
  })

}

module.exports = User;
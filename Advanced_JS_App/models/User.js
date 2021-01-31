const usersCollection = require('../db');
let validator = require("validator");

let User = function (data) {
  this.data = data;
  this.errors = [];
}

User.prototype.cleanUp = function() {
  if(typeof(this.data.username) != "string") {this.data.username = ""};
  if(typeof(this.data.email) != "string") {this.data.email = ""};
  if(typeof(this.data.password) != "string") {this.data.password = ""};

  this.data = {
    username:this.data.username.trim().toLowerCase(),
    email:this.data.email.trim().toLowerCase(),
    password:this.data.password
  }
}

User.prototype.validate = function () {
  if (this.data.username == "") { this.errors.push("You must provide a username") };
  if (!validator.isEmail(this.data.email)) { this.errors.push("You must provide a valid email") };
  if (this.data.password == "") { this.errors.push("You must provide a password") };
  if (this.data.password.length > 0 && this.data.password.length < 12) {
    this.errors.push("Password must be at least 12 characters long!")
  };
  if (this.data.password.length > 50) {
    this.errors.push("Password must not exceed 50 characters!")
  };
  if (this.data.username.length > 0 && this.data.password.length < 3) {
    this.errors.push("Username must be at least 3 characters long!")
  };
  if (this.data.username.length > 20) {
    this.errors.push("Username must not exceed 20 characters!")
  };
  if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {
    this.errors.push("Username can only contain letters and numbers!")
  };

}

User.prototype.register = function () {
  this.cleanUp();
  this.validate();

  if(!this.errors.length) {
    usersCollection.collection("usersInAdvancedApp").insertOne(this.data);
  }
}

User.prototype.login = function () {
console.log("User.prototype.login block")
this.cleanUp();
usersCollection.collection("usersInAdvancedApp").findOne({username: this.data.username}, (err, attemptedUser) => {
if(attemptedUser && attemptedUser.password == this.data.password) {
  console.log("It is working! Good job!!")
} else {
  console.log("Invalid username or password!")
}
});
}

module.exports = User;

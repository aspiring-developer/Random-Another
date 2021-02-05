let mongodb = require("mongodb");
let User = function(formData) {
  this.userInput = formData;
  this.errorMessage = [];
}

User.prototype.registerUser = function() {


  console.log(req.body);
}

module.exports = User;
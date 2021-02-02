const User = require("../models/User");

exports.homeController = function (req, res) {
  res.render("home-guest");
};

exports.registerController = function (req, res) {
  let user = new User(req.body);
  user.registerUser(); // this registerUser() is from model (User.js)
  console.log(req.body);
  if (user.errorMessages.length) {
    res.send(user.errorMessages)
  } else {
    res.send("Well done, no errors!")
  }
};

exports.loginController = function (req, res) {
  let user = new User(req.body);
  user.loginUser().then(function(result){     // this loginUser() is from model (User.js)
    res.send(result);
  }).catch(function(errorMessage) {    // this errMessage points to the reject() message in (User.js)
    res.send(errorMessage);
  })
  };

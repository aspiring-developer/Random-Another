let User = require("../models/User");

exports.homeController = function(req, res) {
   res.render("home-guest");
}

exports.registerController = function(req, res) {
  let user = new User(req.body);

  user.registerUser();
  console.log(req.body);
  res.send("<h1>register controller function from userController.js</h1>");
}

exports.loginController = function(req, res) {
  res.send("<h1>login controller function from useController.js</h1>");
}
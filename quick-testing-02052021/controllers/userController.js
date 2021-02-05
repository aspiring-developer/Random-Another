let User = require("../models/User");

exports.homeController = function(req, res) {
  res.render("home-guest");
}

exports.registerController = function(req, res) {
res.send("This is from registerController function in userController file.")
let user = new User(req.body);
user.registerUser();
}
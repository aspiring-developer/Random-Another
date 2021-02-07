let User = require("../models/User");

exports.homeController = function(req, res) {
  res.render("home-guest");
}

exports.registerController = function(req, res) {
let user = new User(req.body);
user.registerUser();
console.log(req.body);
res.send("RegisterController File");
}
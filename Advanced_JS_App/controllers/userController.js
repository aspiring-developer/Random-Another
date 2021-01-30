const User = require("../models/User");

exports.home = function(req, res) {
  res.render("home-guest");
};

exports.register = function(req, res) {
  let user = new User(req.body);
user.register();

  console.log(req.body);
 if(user.errors.length) {
res.send(user.errors)
 } else {
res.send("Well done, no errors!")
 }
};
const User = require("../models/User");

exports.home = function (req, res) {
  res.render("home-guest");
};

exports.register = function (req, res) {
  let user = new User(req.body);
  user.register(); // this register() is from model (User.js), not from this block
  console.log(req.body);
  if (user.errors.length) {
    res.send(user.errors)
  } else {
    res.send("Well done, no errors!")
  }
};

exports.login = function (req, res) {
  let user = new User(req.body);
  user.login(); // this login() is from model (User.js), not from this block
  console.log("Login feature working!");
  res.send("Thank you for logging in!")
}

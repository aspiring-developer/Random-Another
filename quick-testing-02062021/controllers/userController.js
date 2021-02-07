let express = require("express");
let User = require("../models/User");

exports.homeController = function(req, res) {
res.render("home-guest");
}

exports.registerController = function(req, res) {
  let user = new User(req.body);
  user.registerUser();
 res.send(req.body);
  //res.send("Thank you for registering!");
  }
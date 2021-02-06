let User = require("../models/User");
let express = require("express");

exports.homeController = function(req, res) {
  res.render("home-guest");
}

exports.registerController = function(req, res) {
  let user = new User(req.body);
  user.registerUser();
   res.send("From registerController file.");
}
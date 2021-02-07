const express = require("express");
const User = require("../models/User");

exports.homeController = function (req, res) {
  res.render("home-guest");
}

exports.registerController = function (req, res) {
 let user = new User(req.body);
  user.registerUser();
  res.send(req.body);
console.log(req.body);
console.log("well done, no errors");
}

exports.loginController = function (req, res) {
  let user = new User(req.body);
user.loginUser().then(function(result) {
  res.send(result);
}).catch(function(errorMessage) {
  res.send(errorMessage);
});
 }

let express = require("express");
let User = require("../models/User");

exports.homeController = function(req, res) {
  res.render("home-guest");
}

exports.registerController = function(req, res) {
  let user = new User(req.body);
   user.registerUser();
   res.send(req.body);
  console.log(req.body);
  console.log("Well done! No errors!!");
}

exports.loginController = function(req, res) {
  let user = new User(req.body);
  user.loginUser().then(function(result){     // this loginUser() is from model (User.js)
    res.send(result);
  }).catch(function(errorMessage) {    // this errMessage points to the reject() message in (User.js)
    res.send(errorMessage);
  })
  //console.log(req.body);
  };
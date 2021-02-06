//let express = require("express");
//let router = require("./router");

exports.homeController = function(req,res) {
  res.send("This is from userController/homeController!");
}

exports.registerController = function(req,res) {
  res.send("This is from userController/registerController!");
  //console.log(req.body);
}
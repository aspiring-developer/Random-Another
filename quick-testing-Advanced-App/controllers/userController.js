let express = require("express");

exports.homeController = function(req, res) {
  res.render("home-guest");
}
exports.home = function(req, res) {
  res.render("home-guest");
};

exports.register = function(req, res) {
  res.send("This is from userController.js register constructor.")
};
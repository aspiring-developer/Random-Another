const User = require("../models/User");

exports.homeController = function (req, res) {
  if (req.session.user) {
    res.render("home-dashboard", { username: req.session.user.username });
  } else {
    res.render("home-guest", {errors: req.flash('errors')});
  }
};

exports.registerController = function (req, res) {
  let user = new User(req.body);
  user.registerUser(); // this registerUser() is from model (User.js)
  console.log(req.body);
  if (user.errorMessages.length) {
    res.send(user.errorMessages)
  } else {
    res.send("Well done, no errors!")
  }
};

exports.loginController = function (req, res) {
  let user = new User(req.body);
  user.loginUser().then(function (result) {  // this loginUser() is from model (User.js)
    req.session.user = { myFavoriteSong: "Please", username: user.userInput.username }
    req.session.save(function() {
      res.redirect('/');
    })
  }).catch(function (errMessage) {
      // this errMessage points to the reject() message in (User.js)
    req.flash('errors', errMessage)
    req.session.save(function() {
      res.redirect('/');
    })
   })
};

exports.logoutController = function (req, res) {
  req.session.destroy(function () {
   res.redirect("/");
  });

};

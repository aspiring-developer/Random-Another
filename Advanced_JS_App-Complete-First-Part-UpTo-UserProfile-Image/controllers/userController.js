const User = require("../models/User");

exports.homeController = function (req, res) {
  if (req.session.user) {
    res.render("home-dashboard", { username: req.session.user.username, avatar: req.session.user.avatar });
  } else {
    res.render("home-guest", { errors: req.flash('errors'), regErrors: req.flash("regErrors")});
  }
};

exports.registerController = function (req, res) {
  let user = new User(req.body);
  user.registerUser().then(() => {  // this registerUser() is from model (User.js)
req.session.user = {username: user.userInput.username, avatar: user.avatar};
req.session.save(function() {
  res.redirect('/');
})
  }).catch((regErrors) => {
regErrors.forEach(function(error) {
  req.flash("regErrors", error);
})
req.session.save(function() {
  res.redirect('/');
})
  })
};

exports.loginController = function (req, res) {
  let user = new User(req.body);
  user.loginUser().then(function (result) {  // this loginUser() is from model (User.js)
    req.session.user = { avatar: user.avatar, username: user.userInput.username }
    req.session.save(function () {
      res.redirect('/');
    })
  }).catch(function (errMessage) {
    // this errMessage points to the reject() message in (User.js)
    req.flash('errors', errMessage)
    req.session.save(function () {
      res.redirect('/');
    })
  })
};

exports.logoutController = function (req, res) {
  req.session.destroy(function () {
    res.redirect("/");
  });

};

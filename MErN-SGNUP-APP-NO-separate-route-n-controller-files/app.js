const express = require("express");
const User = require("./models/User");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

app.get('/', function(req, res) {
res.render("home-guest");
})

app.post('/register', function(req, res) {
let user = new User(req.body);
user.registerUser();
res.send(req.body);
console.log(req.body);
console.log("It is from app.js register endpoint.");
})

module.exports = app;
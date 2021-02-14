const express = require("express");
const User = require("./models/User");

const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

app.get('/', function(req, res) {
res.render("home-guest");
})

app.post('/register', function(req, res) {
console.log("Post method of register endpoint.");
console.log(req.body);
let user = new User(req.body);
console.log(user + "It is from app.js register endpoint.");
//registerUser();
})

module.exports = app;
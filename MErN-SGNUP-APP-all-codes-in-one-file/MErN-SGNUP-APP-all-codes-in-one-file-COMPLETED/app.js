const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// These three lines below don't need if not using other files (as we did not use on this)
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

// Routes
app.get('/', function (req, res) {
// Use "res.render("home-guest");" and have home-guest.ejs file in views folder if wanted full html, but this here works same way.
//res.render("home-guest");
res.send(` <div class="container">
<form action="/register" method="POST">
  <input type="text" name="username" placeholder="Pick a username" />
  <input type="text" name="email" placeholder="you@example.com" />
  <input type="password" name="password" placeholder="Create a password" />
  <button type="submit">Sign up</button>
</form>
</div> `);
})

app.post('/register', function (req, res) {
  let user = new User(req.body);
  user.registerUser();
  res.send(req.body);
  console.log(req.body);
})

//Database connection:
let db;
const connectionStrings = process.env.DATABASE_URI;
mongodb.connect(connectionStrings, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  db = client.db();
  console.log("Database is connected...");
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, function (req, res) {
    console.log(`The app is running on http://localhost:${PORT}`)
  })
})

// User model creation
let User = function (formData) {
  this.userInput = formData;
  this.errorMessages = [];
}
User.prototype.registerUser = function () {
  db.collection("collection-02142021").insertOne(this.userInput);
}

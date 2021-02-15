const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send( ` <div class="container">
  <form action="/register" method="POST">
    <input type="text" name="username" placeholder="Pick a username" />
    <input type="text" name="email" placeholder="you@example.com" />
    <input type="password" name="password" placeholder="Create a password" />
    <button type="submit">Sign up</button>
  </form>
  </div> `)
});

app.post('/register', (req, res) => {
  let user = new User(req.body);
  user.registerUser();
  console.log(req.body);
 res.send(req.body);
})

// Create and connect database
let connectionString = process.env.DATABASE_URI;
let db;
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
db = client.db();
console.log("MongoDB database is working...")
const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
console.log(` App is running on http://localhost:${PORT} `)
})
})

let User = function(formData) {
  this.userInput = formData;
  this.errorMessage = [];
}
User.prototype.registerUser = function() {
  db.collection("collection-02142021").insertOne(this.userInput);
  }
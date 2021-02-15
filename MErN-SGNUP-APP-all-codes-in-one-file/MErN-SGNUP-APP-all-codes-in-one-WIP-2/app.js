const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();

const app = express();


const connectionString = process.env.DATABASE_URI;

app.use(express.urlencoded({extended: false}));
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
})

app.post('/register', (req, res) => {
  let user = new User(req.body);
  user.registerUser();
  res.send(req.body);
  console.log(req.body);
});

let db;
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
  db = client.db();
  console.log("Database connection established...")
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, (req, res) => {
    console.log(` App is running on http://localhost:${PORT} `)
});

});

let User = function(formData) {
  this.userInput = formData;
  this.errorMessage = [];
}

User.prototype.registerUser = function() {
  db.collection("collection-02142021").insertOne(this.userInput);
}
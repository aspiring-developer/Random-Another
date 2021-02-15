const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
res.send(` <div class="container">
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
  console.log(req.body);
  user.registerUser();
  res.send(req.body);
});

const connectionString = process.env.DATABASE_URI;
let db;
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  db = client.db();
  console.log("Database connected...");
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, (req, res) => {
    console.log(` App is running on http://localhost:${PORT} `)
  });
});

let User = function(formData) {
  this.userInput = formData;
  this.errorMessage = [];
};
User.prototype.registerUser = function() {
db.collection("collection-02142021").insertOne(this.userInput);
}

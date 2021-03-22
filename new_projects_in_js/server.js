let express = require('express');
let mongodb = require('mongodb');
require('dotenv').config();

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function(req, res) {
  res.send("Welcome to my app!!!")
  console.log("Working app.get");
});
app.post('/register', function(req, res) {
 console.log(req.body);
  console.log("Working app.post");
  res.send("Thank you for registering.")
});

let connectionString = process.env.MONGO_URI;
mongodb.connect(connectionString, { useUnifiedTopology: true }, function(err, client) {
  let db = client.db();
  db.collection("coll-03222021").insertOne({ id: 1, firstName: 'Shi', lastName: 'Sha' })
  console.log("Database connected successfully!")

  app.listen(3000, function(req, res) {
  console.log(` App is running on http://localhost:${PORT}`)
  });
})


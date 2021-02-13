const express = require("express");
let PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
const usersRoute = require('./routes/api/users')

let app = express();

// Call the connectDB to connect to the database
connectDB();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/users', usersRoute);

app.get('/', function(req, res) {
  res.send("Welcome to my app!");
})

app.listen(PORT, function(req, res) {
  console.log(`Server running on http://localhost:${PORT}`)
})
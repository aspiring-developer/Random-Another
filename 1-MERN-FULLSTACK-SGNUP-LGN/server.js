const express = require("express");
let PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');

let app = express();

// Call the connectDB to connect to the database
connectDB();

app.get('/', function(req, res) {
  res.send("Welcome to my app!");
})

app.listen(PORT, function(req, res) {
  console.log(`Server running on http://localhost:${PORT}`)
})
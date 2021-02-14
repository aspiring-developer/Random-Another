//const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();
const connectionStrings = process.env.DATABASE_URI;

mongodb.connect(connectionStrings, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client.db();
  console.log("Database is connected...");

  const PORT = process.env.PORT || 3000;
  const app = require('./app');

app.listen(PORT, function(req, res) {
  console.log(`The app is running on http://localhost:${PORT}`)
})
})
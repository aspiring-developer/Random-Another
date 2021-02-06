let mongodb = require("mongodb");
require("dotenv").config();

let connectionString = process.env.DATABASE_URI;
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client.db();
  console.log("mongoDB connection established!");
})
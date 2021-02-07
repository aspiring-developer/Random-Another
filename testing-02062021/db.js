let mongodb = require("mongodb");
require("dotenv").config();

const connectionString = process.env.DATABASE_URI;

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client.db();
  console.log("MongoDB connection established!");
})
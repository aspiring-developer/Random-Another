let mongodb = require("mongodb");
require("dotenv").config();

let connectionString = process.env.DATABASE_URI;

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client.db();
  console.log("MongoDB connection established!");
  let PORT = process.env.PORT || 3000;
  let app = require("./app");
app.listen(PORT, function(req, res) {
  console.log(`App is running on http://localhost:${PORT}`);
})
})
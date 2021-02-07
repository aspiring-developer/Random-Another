let mongodb = require("mongodb");
let User = require("./models/User");
require("dotenv").config();

let connectionStrings = process.env.DATABASE_URI;
mongodb.connect(connectionStrings, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client.db();
  let PORT = process.env.PORT || 3000;
  let app = require("./app");
app.listen(PORT, function(req, res) {
  console.log(`App is running on http://localhost:${PORT}`)
})
  console.log("Database is connected!");
})


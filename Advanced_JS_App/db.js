const mongodb = require("mongodb");
const app = require("./app");

let connectionString = process.env.DATABASE_URI;
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
  module.exports = client.db();
  let PORT = process.env.PORT || 3000;
   app.listen(PORT, function(req, res) {
    console.log(` App is listening on http://localhost:${PORT} `);
    console.log("MongoDB connected!");
  })
})
let mongodb = require("mongodb");
require("dotenv").config();

let connectionString = process.env.DATABASE_URI;
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
module.exports = client.db();
console.log("MongoDB connected!");

let app = require("./app");
let PORT = process.env.PORT || 3000;
app.listen(PORT, function(req, res) {
  console.log(`App is running on http://localhost:${PORT}`)
});

})
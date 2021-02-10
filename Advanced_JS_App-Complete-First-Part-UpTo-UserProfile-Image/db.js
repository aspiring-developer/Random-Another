const mongodb = require("mongodb");
require('dotenv').config();

const connectionString = process.env.DATABASE_URI;
mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  module.exports = client;
  const app = require('./app');
  let PORT = process.env.PORT || 3030;
  app.listen(PORT, function (req, res) {
    console.log(` App is listening on http://localhost:${PORT} `);
  })
})

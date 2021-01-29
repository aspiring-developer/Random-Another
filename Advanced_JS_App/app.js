let express = require("express");
let PORT = process.env.PORT || 3000;
let app = express();

const router = require("./router");
require('dotenv').config();

app.use('/', router);
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

app.listen(PORT, function(req, res) {
  console.log(` App is listening on http://localhost:${PORT}`);
})
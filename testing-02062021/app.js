let express = require("express");
let app = express();
let PORT = process.env.PORT || 8080;
let router = require("./router");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use('/', router);
app.set("views", "views");
app.set("view engine", "ejs");

app.listen(PORT, function(req, res) {
  console.log(`App is running on http://localhost:${PORT}`)
})
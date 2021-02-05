let express = require("express");
let app = express();
let router = require("./router");
let PORT = process.env.PORT || 3000;

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(router);

app.listen(PORT, function(req, res) {
  console.log(`App is running on http://localhost:${PORT}`)
})
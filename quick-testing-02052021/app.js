let express = require("express");
let PORT = process.env.PORT || 3000;
let router = require("./router");
let app = express();

app.set("views", "views");
app.set("view engine", "ejs");
app.use(router);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function(req, res) {
  console.log(`App is running on http://localhost:${PORT}`);
})
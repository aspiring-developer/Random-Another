let express = require("express");
let router = require("./router");

let PORT = process.env.PORT || 3000;

let app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", router);
app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.listen(PORT, function(req, res) {
  console.log(`App is running on http://localhost:${PORT}`)
});
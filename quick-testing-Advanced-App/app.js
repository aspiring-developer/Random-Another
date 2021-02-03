let express = require("express");
let router = require("./router");

let app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", router);
app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

module.exports = app;
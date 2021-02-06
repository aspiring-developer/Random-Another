let express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;
let router = require("./router");

app.use(router);
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(PORT, function(req, res) {
  console.log(`App is running on http://localhost:${PORT}`)
})
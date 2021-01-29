let express = require("express");
let PORT = process.env.PORT || 3000;
let app = express();

//app.use(express());

app.get('/', function(req, res) {
res.send("Hello, welcome to the app!");
})

//app.listen(3000);

app.listen(PORT, function(req, res) {
  console.log(` App is listening on http://localhost:${PORT}`);
})
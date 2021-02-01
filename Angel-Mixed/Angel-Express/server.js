const express = require("express");
//const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3050;

//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function(req, res) {
    res.send( ` <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator App</title>
  </head>
  <body>
    <div>
      <h3>Simple Calculator App</h3>
  <form action="/" method="post">
  <input name="num1" placeholder="Number 1" />
  <input name="num2" placeholder="Number 2" />
  <button type="submit" name="submit"> Calculate </button>
  </form>
    </div>

  </body>
  </html> `)
});

app.post('/', function(req, res) {
  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);
  let result = num1 + num2;
  console.log(result);
  res.send("The result is: " + result);
});

app.listen(PORT, function(req, res) {
  console.log(` App is running on http://localhost:${PORT} `);
});
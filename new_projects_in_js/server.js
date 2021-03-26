const express = require('express');
const mongodb = require('mongodb');
const ejs = require('ejs');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

//app.set('views', './views');
//app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req,res) {
  res.render("./index")
});

app.get('/graphic-digital', function(req,res) {
  res.render("graphicDigital")
});


app.listen(PORT, function(req, res) {
  console.log(` App is running on http://localhost:3000 `);
})


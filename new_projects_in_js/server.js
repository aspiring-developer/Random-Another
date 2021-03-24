const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

let connectionString = process.env.MONGO_URI;
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', function(req, res) {
res.send(` <html><head></head><body><div style="text-align:center; background-color: #aeaeae"><form action="create-item" method="POST"><input type="text" name="userInput" /><button type="submit">Submit</button></form></div><div><ul><li><span class="itemName">Temporary Placeholder Item 1</span><button class="editButton">Edit</button><button class="deleteButton">Delete</button></li></ul></div></body></html> `);
});

app.post('/create-item', function(req, res) {
  console.log(req.body.userInput);
  res.send(` <html><head></head><body><div><ul><li><span class="itemName">${req.body.userInput} Temporary Placeholder Item 1</span><button class="editButton">Edit</button><button class="deleteButton">Delete</button></li></ul></div></body></html> `)
  res.redirect('/');
  });

app.listen(PORT, function(req, res) {
console.log(`App is running on http://localhost:${PORT}`)
});
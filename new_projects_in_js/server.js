let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function(req, res) {
  res.send("Welcome to my app!!!")
});
app.post('/register', function(req, res) {
  console.log("Working")
  res.send("Thank you for registering.")
});

app.listen(3000, function(req, res) {
console.log(` App is running on http://localhost:${PORT}`)
});

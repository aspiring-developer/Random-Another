let express = require('express');
let myApp = express();

myApp.use(express.urlencoded({extended: true}));
myApp.use(express.json());

myApp.get('/', function(req,res) {
  console.log("Home page")
res.send(`<form action="/answer" method="POST">
<input type="text" name="inputField" />
<button type="submit" name="submitButton">Submit</button>
</form>`);
});

myApp.post('/answer', function(req,res) {
let userInput = req.body.inputField;
console.log(userInput + " User Input Received");
if(userInput) {
  res.send("Thank you for submitting...");
}
});

myApp.listen(5000, function(req,res){
  console.log(`App is running on http://localhost:5000`)
});
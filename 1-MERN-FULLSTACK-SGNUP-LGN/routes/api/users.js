const express = require("express");
const router = express.Router();

router.get('/', function(req, res) {
  res.send("users route is working!");
});

router.post('/register', function(req, res) {
  console.log(req.body);
  res.send("register route is working!");
})
module.exports = router;
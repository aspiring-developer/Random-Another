const { Router } = require("express");
let express = require("express");
let router = express.Router();
let userController = require("./controllers/userController");

router.get("/", userController.homeController);

module.exports = router;
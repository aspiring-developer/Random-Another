const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
//const postController = require("./controllers/postController");
//const followController = require("./controllers/followController");

router.get('/', userController.homeController);

router.post('/register', userController.registerController);

router.post('/login', userController.loginController);

module.exports = router;

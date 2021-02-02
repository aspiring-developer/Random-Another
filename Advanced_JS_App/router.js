const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

router.get('/', userController.homeController);

router.post('/register', userController.registerController);

router.post('/login', userController.loginController);

module.exports = router;

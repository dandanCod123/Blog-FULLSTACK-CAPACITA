const express = require('express');
const router = express.Router();
const userController = require('./user.controllers')


router.post('/register', userController.registerUserController);
router.post('/login', userController.loginController);
router.get('/users', userController.getAllUsersController);

module.exports = router;
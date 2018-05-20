const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.get('/getAll', userController.getAllUser)
router.post('/register', userController.createUser)
module.exports = router
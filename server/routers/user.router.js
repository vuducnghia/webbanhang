const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')
const passport = require('passport')


router.get('/getAll', userController.getAllUser)
router.post('/register', userController.createUser)
router.get('/findUserByUsername', userController.findUserByUsername)
router.post('/login', passport.authenticate('local',{ successReturnToOrRedirect: '/', failureRedirect: '/login'}))
module.exports = router
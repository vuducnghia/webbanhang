'use strict';

var express = require('express');
var controller = require('./user.controller')
var router = express.Router();

router.post('/', controller.createUser)

module.exports=router
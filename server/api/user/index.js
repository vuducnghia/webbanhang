'use strict';
var auth = require('../../auth/auth.service')

var express = require('express');
var controller = require('./user.controller')
var router = express.Router();
var auth = require('../../auth/auth.service')

router.post('/', controller.create);
router.delete('/:id', auth.hasRole('admin'), controller.delete);
router.get('/', auth.isAuthenticated(),controller.getAll);

module.exports=router
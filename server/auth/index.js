'use strict';

const express = require('express');
var router = express.Router();
var User = require('../api/user/user.model')
// Passport Configuration
require('./local/passport').setup(User);

router.use('/local', require('./local'));

module.exports = router
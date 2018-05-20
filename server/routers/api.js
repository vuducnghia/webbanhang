var express = require('express');
var router = express.Router();
var user = require('./user.router')
var auth = require('./auth.router')
router.get('/', (req, res) => {
    res.json('value');
})

router.use('/user', user)
router.use('/auth', auth)
module.exports = router
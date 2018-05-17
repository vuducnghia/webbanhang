var express = require('express');
var router = express.Router();
var user = require('./user.router')
router.get('/', (req, res) => {
    res.json('value');
})

router.use('/user', user)
module.exports = router
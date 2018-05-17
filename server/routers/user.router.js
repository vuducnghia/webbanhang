var express = require('express');
var router = express.Router();
var user = require('../models/user.model')

router.get('/getAll', (req, res, next) => {
    user.getAllUser((err, result) => {
        if (err)
            res.json(err)
        res.json(result);
    })
})
module.exports = router
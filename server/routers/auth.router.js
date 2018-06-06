var express = require('express');
var router = express.Router();
var passport = require('passport')
// router.post('/login', passport.authenticate('local', { successReturnToOrRedirect: '/', failureRedirect: '/login' }))
// router.post('/login', (req, res) => {
//     console.log(req.body.username)
//     if (!req.body.username || !req.body.password) {
//         res.json('not username or password');
//     }
//     console.log(1)
//     res.json('value');
// })

// router.post('/register', (req, res) => {

// })
module.exports = router
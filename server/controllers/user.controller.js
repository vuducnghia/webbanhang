const user = require('../models/user.model')
const bcrypt = require('bcrypt-nodejs');

exports.getAllUser = (req, res) => {
    user.findAll({ raw: true }).then(aruser => aruser.forEach(user => console.log(user)))
    res.json("value");
}
exports.createUser = (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            res.json(err)
        }
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {
                res.json(err)
            }

            user.create({
                username: req.body.username,
                password: hash
            }).then(user => {
                res.json(user.get({ plain: true }));
            })
        });
    })
}
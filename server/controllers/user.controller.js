const user = require('../models/user.model')
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/secretJWT')

exports.getAllUser = (req, res) => {
    user.findAll({ raw: true }).then(aruser => aruser.forEach(user => console.log(user)))
    res.json("value");
}
exports.createUser = (req, res) => {
    user.findOne({ where: { username: req.body.username } }).then((u) => {
        if (u)
            res.json('username existed');
        else
            bcrypt.genSalt(10, function (err, salt) {
                if (err) {
                    res.json(err)
                }
                else
                    bcrypt.hash(req.body.password, salt, null, function (err, hash) {
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
    })
    
}
exports.deleteUser = (req, res) => {
    user.destroy({ where: { username: req.body.username } }).then((user => {
        res.json('delete success');
    }))
}
exports.findUserByUsername = (req, res) => {
    user.findOne({ where: { username: req.body.username } }).then((user) => {
        res.json(user);
    })
}


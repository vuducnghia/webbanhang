const passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

function localAuthenticate(User, username, password, done) {
    User.find({
        where: {
            username: username
        }
    }).then(user => {
        if (!user) {
            return done(null, false, {
                message: 'This username is not registered.'
            });
        }
        
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) { return done(err) }
            if (!result) {
                return done(null, false, { message: 'This password is not correct.' });
            }
            else
                return done(null, user);
        })
    }).catch(err => done(err));
}

exports.setup = function (User) {

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, function (username, password, done) {
        return localAuthenticate(User, username, password, done);
    }))
}
const passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

function localAuthenticate(User, username, password, done) {
    User.findOne({
        where: {
            username: username
        }
    }).then(user => {
        if (!user) {
            return done(null, false, {
                message: 'This username is not registered.'
            });
        }
        user.authenticate(password, (authError, authenticated) => {
            if (authError) {
                return done(authError)
            }
            if (!authenticated) {
                return done(null, false, { message: 'This password is not correct.' });
            } else {
                return done(null, user);
            }
        })
    }).catch(err => done(err));
}

module.exports = function setup(User) {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, function (username, passport, done) {
        return localAuthenticate(User, username, password, done);
    }))
}
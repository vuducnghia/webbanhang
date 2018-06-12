var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var keySecret = require('./secretJWT').secret;
var config = require('./environment')

module.exports = function(app) {
    //use body parser so we can get info from POST and/or URL parameters
    app.use(bodyParser.json()); // allow method post data json
    app.use(bodyParser.urlencoded({ extended: false }));  // process data json

    app.use(session({
        secret: keySecret,
        saveUninitialized: true,
        resave: true
    }))

    app.set('appPath', path.join(config.root, 'client'));
    app.use(express.static(path.join(config.root, 'client')));
    // app.set('views', config.root)
    app.set('view engine', 'html');

    
    app.use(passport.initialize());
    app.use(passport.session());
}
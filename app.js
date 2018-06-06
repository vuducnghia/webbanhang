var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var keySecret = require('./server/config/secretJWT').secret;
var api = require('./server/routers/api')
var app = express();

//use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.json()); // allow method post data json
app.use(bodyParser.urlencoded({ extended: false }));  // process data json

app.use(session({
    secret: keySecret,
    saveUninitialized: true,
    resave: true
}))

app.set('views', __dirname)
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, './client')));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', api)
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
})




module.exports = app
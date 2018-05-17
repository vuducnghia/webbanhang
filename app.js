var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');


var api = require('./server/routers/api')
var app = express();

app.set('views',__dirname)
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, './client')));
// app.use(express.static(path.join(__dirname, 'dist')));
app.use(passport.initialize());

app.use('/api', api)
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
})



module.exports = app
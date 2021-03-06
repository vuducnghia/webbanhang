'use strict';

const http = require('http');
const express = require('express');
const expressConfig = require('./server/config/express');
var router = require ('./server/router');
var path = require('path');
var app = express();

expressConfig(app)
router(app)

const server = http.createServer(app).listen(4200, () => {
    console.log('Server start at port 4200');
});
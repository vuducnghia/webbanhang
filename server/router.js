'use strict';
var path = require('path');

module.exports = function (app) {
    // app.use('/api', api)
    app.use('/api/users', require('./api/user'));
    app.use('/auth', require('./auth'));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve() + '/client/index.html')
    })
}
'use strict';
var path = require('path');
// var routerProduct = require('./api/product/product.router');
module.exports = function (app) {
    app.use('/api/users', require('./api/user'));
    
    app.use('/auth', require('./auth'));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve() + '/client/index.html')
    })
}
var mysql = require('mysql');
var connection = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'webstore'

});
module.exports = connection;
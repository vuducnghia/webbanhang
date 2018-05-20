const db = require('../config/database.connect')
const sequelize = require('sequelize')

const user = db.define('user', {
    username: sequelize.STRING,
    password: sequelize.STRING
})
db.sync()

// const user = {

//     getAllUser: function (callback) {
//         return db.query("Select * from user", callback);
//     },
//     findByUsername: function (username, callback) {
//         return db.query('select username from user where username= ?', [username], callback)
//     }
// }
module.exports = user
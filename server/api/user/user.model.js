const db = require('../../config/database.connect')
const sequelize = require('sequelize')

const user = db.define('user', {
    username: sequelize.STRING,
    password: sequelize.STRING
})
db.sync()

module.exports = user
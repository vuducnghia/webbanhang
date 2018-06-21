const sequelize = require('sequelize')

const connection = new sequelize({
    database: 'webstore',
    username: 'root',
    password: '12345',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
})

connection.authenticate()
    .then(() => console.log('connect success'))
    .catch(() => console.log(err.message))

module.exports = connection;

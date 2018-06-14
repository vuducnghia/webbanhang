const db = require('../../config/database.connect')
const sequelize = require('sequelize')
var bcrypt = require('bcrypt-nodejs');

const user = db.define('user', {
    username: sequelize.STRING,
    password: {
        type: sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    role: {
        type: sequelize.STRING,
        defaultValue: 'user'
    }
}, {
        instanceMethods: {
            authenticate(password, callback) {
                if (!callback)
                    bcrypt.compare(password, this.password, function (err, result) {
                        if (err) { callback(err); }
                        if (!result) {
                            return callback(null, false, { message: 'Incorrect username and password' });
                        }
                        else
                            return callback(null, user);
                    })
            }
        }
    })
db.sync()

module.exports = user
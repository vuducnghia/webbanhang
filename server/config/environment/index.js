'use strict';
var path = require('path')

module.exports = {
    root: path.normalize(`${__dirname}/../../..`),
    secrets: {
        session: 'vuducnghia'
    },
    userRoles: ['guest', 'user', 'admin']
}
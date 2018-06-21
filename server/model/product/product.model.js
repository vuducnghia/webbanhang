const db = require('../../config/database.connect');
const Sequelize = require('sequelize');

const product = db.define('product', {
    name: { type: Sequelize.STRING },
    cost: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
    stars: { type: Sequelize.INTEGER }
});
db.sync()

module.exports = product;
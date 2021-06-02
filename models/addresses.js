const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Address = sequelize.define('address', {
    street: {
        type: Sequelize.STRING,
        allowNull:false
    },
    city: {
        type: Sequelize.STRING,
        allowNull:false
    },
    pincode: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    state: {
        type: Sequelize.STRING,
        allowNull:false
    },
    country: {
        type: Sequelize.STRING,
        allowNull:false
    }
});

module.exports = Address;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('Demo', 'postgres', 'Pass2021', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;
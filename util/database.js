const Sequelize = require('sequelize');

const sequelize = new Sequelize('company_db', '<db_username>', '<db_password>', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;
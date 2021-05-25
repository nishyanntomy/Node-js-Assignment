const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Department = sequelize.define('department', {
    dept_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dept_name: {
        type: Sequelize.STRING,
        allowNull:false
    }
});

module.exports = Department;
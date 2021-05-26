const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Employee = sequelize.define('employee', {
    emp_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    emp_name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

module.exports = Employee;
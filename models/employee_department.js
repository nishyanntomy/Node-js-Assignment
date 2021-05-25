const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const EmpDept = sequelize.define('employee_department', {
    emp_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dept_id: {
        type: Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = EmpDept;
const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const Employee = require('./models/employees');
const Department = require('./models/departments');
const EmpDept = require('./models/employee_department');

const empRoutes = require('./routes/employees');
const depRoutes = require('./routes/departments');

const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, resp, next) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    resp.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/employees', empRoutes);
app.use('/departments', depRoutes);

EmpDept.belongsTo(Employee, {
    foreignKey: {
        name: 'emp_id'
    },
    onDelete: 'CASCADE'
});

// Employee.hasMany(EmpDept);

EmpDept.belongsTo(Department, {
    foreignKey: {
        name: 'dept_id'
    },
    onDelete: 'CASCADE'
});

// Department.hasMany(EmpDept);

sequelize
    .sync()
    .then(result => {
        console.log('Listening for requests at http://localhost:7001');
        app.listen(7001);
    })
    .catch(err => {
        console.log(err);
    });
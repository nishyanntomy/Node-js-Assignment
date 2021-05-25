const Employee = require('../models/employees');
const EmpDept = require('../models/employee_department');

exports.getAllEmployees = (req, resp, next) => {
    //  Display all employee details
    Employee.findAll()
        .then(employees => {
            // console.log(employees);
            resp.status(200).json({
                message: 'Employees retrieved successfully',
                employees: employees
            });
        }).catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Page Not Found!'
            });
        });
};

exports.getEmployee = (req, resp, next) => {
    const empId = req.params.emp_id;

    // Search an employee by Id
    Employee.findByPk(empId)
        .then(employee => {
            // console.log(employee);
            resp.status(200).json({
                employee
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Employee not found'
            });
        })
};

exports.getEmployeeDepartments = (req, resp, next) => {
    const empId = req.params.emp_id;

    EmpDept.findAll({
        attributes: ['dept_id'],
        where: { emp_id: empId }
    })
        .then(departments => {
            resp.status(200).json({
                departments
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Employee Departments not found'
            })
        });
};

exports.postEmployees = (req, resp, next) => {
    const emp_name = req.body.emp_name;
    const age = req.body.age;
    const is_active = req.body.is_active;

    // Create employee in db
    Employee.create({
        emp_name: emp_name,
        age: age,
        is_active: is_active,
        dept_id: dept_id
    }).then(result => {
        // console.log(result);
        resp.status(201).json({
            message: 'Employee created successfully',
            employees: {
                emp_name: emp_name,
                age: age,
                is_active: is_active,
                dept_id: dept_id
            }
        });
    }).catch(err => {
        console.log(err);
        resp.status(404).json({
            message: 'Employee creation failed'
        });
    });
};

exports.postEmployeeDepartment = (req, resp, next) => {
    const empId = req.params.emp_id;

    const dept_id = req.body.dept_id;
    EmpDept.create({
        emp_id: empId,
        dept_id: dept_id
    }).then(result => {
        resp.status(201).json({
            message: 'Department added for employee'
        });
    }).catch(err => {
        console.log(err);
        resp.status(404).json({
            message: 'Adding Department to Employee failed'
        });
    });
};

exports.editEmployee = (req, resp, next) => {
    const empId = req.params.emp_id;

    const emp_name = req.body.emp_name;
    const age = req.body.age;
    const is_active = req.body.is_active;
    const dept_id = req.body.dept_id;

    // Update employee in db
    Employee.findByPk(empId)
        .then(employees => {
            employees.emp_name = emp_name,
                employees.age = age,
                employees.is_active = is_active,
                employees.dept_id = dept_id
            return employees.save();
        })
        .then(result => {
            // console.log(result);
            resp.status(200).json({
                message: 'Employee updated successfully',
                employees: {
                    emp_name: emp_name,
                    age: age,
                    is_active: is_active,
                    dept_id: dept_id
                }
            });
        }).catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Employee updation failed'
            });
        });
};

exports.deleteEmployee = (req, resp, next) => {
    const empId = req.params.emp_id;

    // Delete employee in db
    Employee.findByPk(empId)
        .then(employee => {
            return employee.destroy();
        })
        .then(result => {
            // console.log(result);
            resp.status(201).json({
                message: 'Employee deleted successfully'
            });
        }).catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Employee deletion failed'
            });
        });
};
const Department = require('../models/departments');

exports.getAllDepartments = (req, resp, next) => {
    Department.findAll()
        .then(departments => {
            // console.log(departments);
            resp.status(200).json({
                message: 'Departments retrieved successfully',
                departments: departments
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Page Not Found!',
            });
        })
};

exports.getDepartment = (req, resp, next) => {
    const deptId = req.params.dept_id;

    Department.findByPk(deptId)
        .then(departments => {
            // console.log(departments);
            resp.status(200).json({
                departments
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Department not found',
            });
        });
};

exports.postDepartment = (req, resp, next) => {
    const dept_name = req.body.dept_name;

    Department.create({
        dept_name: dept_name
    })
        .then(result => {
            // console.log(result);
            resp.status(201).json({
                message: 'Department created successfully!',
                departments: result
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Department creation failed',
            });
        });
};

exports.editDepartment = (req, resp, next) => {
    const deptId = req.params.dept_id;

    const dept_name = req.body.dept_name;

    Department.findByPk(deptId)
        .then(departments => {
            departments.dept_name = dept_name;
            return departments.save();
        })
        .then(result => {
            // console.log(result);
            resp.status(200).json({
                message: 'Department updated successfully',
                departments: {
                    dept_name: dept_name
                }
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Department updation failed',
            });
        });
};

exports.deleteDepartment = (req, resp, next) => {
    const deptId = req.params.dept_id;

    Department.findByPk(deptId)
        .then(departments => {
            return departments.destroy();
        })
        .then(result => {
            // console.log(result);
            resp.status(200).json({
                message: 'Department deleted successfully',
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Department deletion failed',
            });
        });
};
const express = require('express');

const empController = require('../controllers/employees');

const router = express.Router();

// GET => /employees
router.get('/', empController.getAllEmployees);

// GET => /employees/id
router.get('/:emp_id', empController.getEmployee);

// GET => /employees/id/departments
router.get('/:emp_id/departments', empController.getEmployeeDepartments);

// POST => /employees
router.post('/', empController.postEmployees);

// POST => /employees/id/departments
router.post('/:emp_id/departments',empController.postEmployeeDepartment);

// PUT => /employees/id
router.put('/:emp_id', empController.editEmployee);

// DELETE => /employees/id
router.delete('/:emp_id', empController.deleteEmployee);

module.exports = router;
const express = require('express');
const validate = require('express-validation');
const empController = require('../controller/employees');
const {
  idParamsSchema,
  postEmployeeBodySchema,
  editEmployeeBodySchema,
  postEmployeeDepartmentBodySchema,
  postEmployeeRoleBodySchema,
  postEmployeeAddressBodySchema
} = require('../validation/joiRequestValidation');

const router = express.Router();

// GET => /employees
router.get('/', empController.getAllEmployees);

// GET => /employees/id
router.get('/:id', validate(idParamsSchema), empController.getEmployee);

// POST => /employees
router.post('/', validate(postEmployeeBodySchema), empController.postEmployee);

// PUT => /employees/id
router.put('/:id', validate(editEmployeeBodySchema), empController.editEmployee);

// DELETE => /employees/id
router.delete('/:id', empController.deleteEmployee);

// GET => /employees/id/departments
router.get('/:id/departments', empController.getEmployeeDepartments);

// POST => /employees/id/departments
router.post('/:id/departments', validate(postEmployeeDepartmentBodySchema), empController.postEmployeeDepartment);

// GET => /employees/id/roles
router.get('/:id/roles', empController.getEmployeeRoles);

// POST => /employees/id/roles
router.post('/:id/roles', validate(postEmployeeRoleBodySchema), empController.postEmployeeRole);


// GET => /employees/id/addresses
router.get('/:id/address', empController.getEmployeeAddress);

// POST => /employees/id/addresses
router.post('/:id/address', validate(postEmployeeAddressBodySchema), empController.postEmployeeAddress);
module.exports = router;
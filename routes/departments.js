const express = require('express');

const depController = require('../controllers/departments');

const router = express.Router();

// GET => /departments
router.get('/', depController.getAllDepartments);

// GET => /departments/id
router.get('/:dept_id',depController.getDepartment);

// POST => /departments
router.post('/', depController.postDepartment);

// PUT => /departments/id
router.put('/:dept_id',depController.editDepartment);

// DELETE => /departments/id
router.delete('/:dept_id',depController.deleteDepartment);

module.exports = router;
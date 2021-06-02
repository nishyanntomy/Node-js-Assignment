const express = require('express');
const validate = require('express-validation');
const roleController = require('../controller/Roles');
const {
  postRoleBodySchema,
  editRoleBodySchema
} = require('../validation/joiRequestValidation');

const router = express.Router();

// GET => /roles
router.get('/', roleController.getAllRoles);

// GET => /roles/id
router.get('/:id', roleController.getRole);

// POST => /roles
router.post('/', validate(postRoleBodySchema), roleController.postRole);

// PUT => /roles/id
router.put('/:id', validate(editRoleBodySchema), roleController.editRole);

// DELETE => /roles/id
router.delete('/:id', roleController.deleteRole);

module.exports = router;
const { body } = require('express-validator');
const { handleValidationErrors } = require('./shared');

exports.validateDepartment = [
  body('name').notEmpty().withMessage('Department name is required'),
  handleValidationErrors
];

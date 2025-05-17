const { body } = require('express-validator');
const { handleValidationErrors } = require('./shared');

exports.validateMajor = [
  body('name').notEmpty().withMessage('Major name is required'),
  body('department').notEmpty().withMessage('Department ID is required'),
  handleValidationErrors
];
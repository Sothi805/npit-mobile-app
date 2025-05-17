const { body } = require('express-validator');
const { handleValidationErrors } = require('./shared');

exports.validateInstructor = [
  body('name').notEmpty().withMessage('Instructor name is required'),
  handleValidationErrors
];
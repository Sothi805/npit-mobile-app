const { body } = require('express-validator');
const { handleValidationErrors } = require('./shared');

exports.validateStudent = [
  body('name').notEmpty().withMessage('Student name is required'),
  body('class').notEmpty().withMessage('Class ID is required'),
  handleValidationErrors
];
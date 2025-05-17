const { body } = require('express-validator');
const { handleValidationErrors } = require('./shared');

exports.validateSubject = [
  body('name').notEmpty().withMessage('Subject name is required'),
  body('class').notEmpty().withMessage('Class ID is required'),
  body('instructor').notEmpty().withMessage('Instructor ID is required'),
  handleValidationErrors
];
const { body } = require('express-validator');
const { handleValidationErrors } = require('./shared');

exports.validateClass = [
  body('name').notEmpty().withMessage('Class name is required'),
  body('major').notEmpty().withMessage('Major ID is required'),
  handleValidationErrors
];

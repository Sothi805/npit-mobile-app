const { body } = require('express-validator');
const { handleValidationErrors } = require('./shared');

exports.validateScore = [
  body('student').notEmpty().withMessage('Student ID is required'),
  body('subject').notEmpty().withMessage('Subject ID is required'),
  body('attendance').isNumeric().withMessage('Score must be a number'),
  body('exercise').isNumeric().withMessage('Score must be a number'),
  body('midterm').isNumeric().withMessage('Score must be a number'),
  body('finalExam').isNumeric().withMessage('Score must be a number'),
  handleValidationErrors
];
const { body, validationResult } = require('express-validator');

exports.validateSchedule = [
  body('class').notEmpty().withMessage('Class is required'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('instructor').notEmpty().withMessage('Instructor is required'),
  body('dayOfWeek').notEmpty().withMessage('Day of week is required'),
  body('startTime').notEmpty().withMessage('Start time is required'),
  body('endTime').notEmpty().withMessage('End time is required'),
];

exports.handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

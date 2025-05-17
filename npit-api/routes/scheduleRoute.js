const express = require('express');
const router = express.Router();

const {
  getSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule
} = require('../controllers/scheduleController');

const {
  validateSchedule,
  handleValidationErrors
} = require('../validators/scheduleValidator');

router.get('/', getSchedules);
router.post('/', validateSchedule, handleValidationErrors, createSchedule);
router.put('/:id', validateSchedule, handleValidationErrors, updateSchedule);
router.delete('/:id', deleteSchedule);

module.exports = router;

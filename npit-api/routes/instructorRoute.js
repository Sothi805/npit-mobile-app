const express = require('express');
const router = express.Router();
const {
  getInstructors,
  createInstructor,
  updateInstructor,
  deleteInstructor
} = require('../controllers/instructorController');
const { validateInstructor } = require('../validators/instructorValidator');

router.get('/', getInstructors);
router.post('/', validateInstructor, createInstructor);
router.put('/:id', validateInstructor, updateInstructor);
router.delete('/:id', deleteInstructor);

module.exports = router;
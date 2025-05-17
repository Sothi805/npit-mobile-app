const express = require('express');
const router = express.Router();
const {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');
const { validateStudent } = require('../validators/studentValidator');

router.get('/', getStudents);
router.post('/', validateStudent, createStudent);
router.put('/:id', validateStudent, updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
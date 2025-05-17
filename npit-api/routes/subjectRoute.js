const express = require('express');
const router = express.Router();
const {
  getSubjects,
  createSubject,
  updateSubject,
  deleteSubject
} = require('../controllers/subjectController');
const { validateSubject } = require('../validators/subjectValidator');

router.get('/', getSubjects);
router.post('/', validateSubject, createSubject);
router.put('/:id', validateSubject, updateSubject);
router.delete('/:id', deleteSubject);

module.exports = router;
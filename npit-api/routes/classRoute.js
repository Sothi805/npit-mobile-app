const express = require('express');
const router = express.Router();
const {
  getClasses,
  createClass,
  updateClass,
  deleteClass
} = require('../controllers/classController');
const { validateClass } = require('../validators/classValidator');

router.get('/', getClasses);
router.post('/', validateClass, createClass);
router.put('/:id', validateClass, updateClass);
router.delete('/:id', deleteClass);

module.exports = router;
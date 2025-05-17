const express = require('express');
const router = express.Router();
const {
  getScores,
  createScore,
  updateScore,
  deleteScore
} = require('../controllers/scoreController');
const { validateScore } = require('../validators/scoreValidator');

router.get('/', getScores);
router.post('/', validateScore, createScore);
router.put('/:id', validateScore, updateScore);
router.delete('/:id', deleteScore);

module.exports = router;
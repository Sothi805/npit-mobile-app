const Score = require('../models/score');

exports.getScores = async (req, res) => {
  try {
    const scores = await Score.find()
      .populate({ path: 'student', select: 'name' })
      .populate({ path: 'subject', select: 'name' });
    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createScore = async (req, res) => {
  try {
    const score = new Score(req.body);
    await score.save();
    res.status(201).json(score);
  } catch (err) {
    if (err.name === 'ValidationError') return res.status(400).json({ error: err.message });
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.updateScore = async (req, res) => {
  try {
    const score = await Score.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(score);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteScore = async (req, res) => {
  try {
    await Score.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
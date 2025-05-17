const Major = require('../models/major');

const getMajors = async (req, res) => {
  try {
    const majors = await Major.find()
      .populate({ path: 'department', select: 'name' });
    res.json(majors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createMajor = async (req, res) => {
  try {
    const major = new Major(req.body);
    await major.save();
    res.status(201).json(major);
  } catch (err) {
    if (err.name === 'ValidationError') return res.status(400).json({ error: err.message });
    res.status(500).json({ error: 'Server Error' });
  }
};

const updateMajor = async (req, res) => {
  try {
    const major = await Major.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(major);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteMajor = async (req, res) => {
  try {
    await Major.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getMajors,
  createMajor,
  updateMajor,
  deleteMajor,
};
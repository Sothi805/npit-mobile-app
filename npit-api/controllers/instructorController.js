const Instructor = require('../models/instructor');

exports.getInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find()
      .populate({ path: 'subjects', select: 'name' });
    res.json(instructors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createInstructor = async (req, res) => {
  try {
    const instructor = new Instructor(req.body);
    await instructor.save();
    res.status(201).json(instructor);
  } catch (err) {
    if (err.name === 'ValidationError') return res.status(400).json({ error: err.message });
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.updateInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(instructor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteInstructor = async (req, res) => {
  try {
    await Instructor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  attendance: Number,
  exercise: Number,
  midterm: Number,
  finalExam: Number
});

module.exports = mongoose.model('Score', scoreSchema);

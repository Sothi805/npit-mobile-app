const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },
  dayOfWeek: { type: String, required: true }, // e.g. 'Monday'
  startTime: { type: String, required: true }, // e.g. '08:00'
  endTime: { type: String, required: true },   // e.g. '09:30'
  location: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Schedule', scheduleSchema);

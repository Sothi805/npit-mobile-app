const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  sectionNumber: Number,
  attendances: [{
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    present: Boolean
  }]
});

const subjectSchema = new mongoose.Schema({
  name: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  sections: [sectionSchema]
});

module.exports = mongoose.model('Subject', subjectSchema);

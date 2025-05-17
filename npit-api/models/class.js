const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: String,
  major: { type: mongoose.Schema.Types.ObjectId, ref: 'Major', required: true },
  year: Number,
  semester: Number,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Class', classSchema);

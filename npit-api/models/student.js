const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
});

module.exports = mongoose.model('Student', studentSchema);

const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  name: String,
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }]
});

module.exports = mongoose.model('Instructor', instructorSchema);

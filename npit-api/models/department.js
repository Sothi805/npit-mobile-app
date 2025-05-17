const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  head: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' }, // optional
  staff: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' }]
});

module.exports = mongoose.model('Department', departmentSchema);

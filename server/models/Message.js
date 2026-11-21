const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    company: { type: String, trim: true, maxlength: 150 },
    topic: {
      type: String,
      enum: ['project', 'hello', 'careers', 'internship'],
      default: 'project'
    },
    budget: { type: String, trim: true, maxlength: 50 },
    message: { type: String, required: true, trim: true, maxlength: 4000 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);

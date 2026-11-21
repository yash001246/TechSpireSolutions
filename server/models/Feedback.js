const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    role: { type: String, trim: true, maxlength: 120 },
    company: { type: String, trim: true, maxlength: 150 },
    project: { type: String, trim: true, maxlength: 150 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    quote: { type: String, required: true, trim: true, maxlength: 1500 },
    // New submissions stay hidden until you approve them (set approved: true in MongoDB).
    approved: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feedback', feedbackSchema);

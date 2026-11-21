const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    sector: String,
    title: { type: String, required: true },
    summary: String,
    tags: [String],
    color: String,
    textColor: String,
    accent: String,
    results: [String]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);

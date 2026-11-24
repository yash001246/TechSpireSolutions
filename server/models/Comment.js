const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 60 },
    message: { type: String, required: true, trim: true, maxlength: 500 },
    // To hide a comment, set hidden: true on it in MongoDB Atlas. It disappears from the site.
    hidden: { type: Boolean, default: false }
  },
  { timestamps: true }
);

commentSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Comment', commentSchema);
require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Feedback = require('./models/Feedback');
const projects = require('./data/projects');
const feedback = require('./data/feedback');

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/techspire');
    await Project.deleteMany({});
    await Project.insertMany(projects);
    // Replace only seeded entries (and the old "Sample Client" ones), so real submissions are kept.
    await Feedback.deleteMany({ $or: [{ seed: true }, { name: /^Sample Client/ }] });
    await Feedback.insertMany(feedback);
    console.log(`Seeded ${projects.length} projects and ${feedback.length} testimonials.`);
  } catch (err) {
    console.error('Seeding failed:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
})();
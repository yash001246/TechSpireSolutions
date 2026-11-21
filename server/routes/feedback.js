const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

// GET /api/feedback - approved reviews only
router.get('/', async (req, res) => {
  try {
    const items = await Feedback.find({ approved: true }).sort({ createdAt: -1 }).limit(100);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Could not load feedback.' });
  }
});

// POST /api/feedback - a client submits a review (held for approval)
router.post('/', async (req, res) => {
  const { name, role, company, project, rating, quote } = req.body || {};
  const stars = Number(rating);

  if (!name || !quote) {
    return res.status(400).json({ error: 'Name and feedback are required.' });
  }
  if (!Number.isInteger(stars) || stars < 1 || stars > 5) {
    return res.status(400).json({ error: 'Please choose a rating from 1 to 5.' });
  }

  try {
    await Feedback.create({ name, role, company, project, rating: stars, quote, approved: false });
    res.status(201).json({ ok: true, message: 'Thank you. Your feedback will appear once our team has reviewed it.' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: 'Some fields are invalid. Please check and try again.' });
    }
    res.status(500).json({ error: 'Could not save your feedback. Please try again.' });
  }
});

module.exports = router;

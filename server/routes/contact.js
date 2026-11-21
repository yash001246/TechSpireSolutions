const express = require('express');
const Message = require('../models/Message');

const router = express.Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, company, topic, budget, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    await Message.create({ name, email, company, topic, budget, message });
    res.status(201).json({ ok: true, message: 'Thanks. We will reply within two working days.' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: 'Some fields are invalid. Please check and try again.' });
    }
    res.status(500).json({ error: 'Could not send your message. Please try again.' });
  }
});

module.exports = router;

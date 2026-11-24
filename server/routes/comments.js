const express = require('express');
const Comment = require('../models/Comment');

const router = express.Router();

// Browsers currently listening for live updates (Server-Sent Events).
const listeners = new Set();

// Simple spam control: one comment per visitor every few seconds.
const COOLDOWN_MS = 8000;
const lastPost = new Map();

const toPublic = (c) => ({
  _id: String(c._id),
  name: c.name,
  message: c.message,
  createdAt: c.createdAt
});

const broadcast = (comment) => {
  const payload = `event: comment\ndata: ${JSON.stringify(comment)}\n\n`;
  listeners.forEach((res) => res.write(payload));
};

// GET /api/comments - latest 50 visible comments
router.get('/', async (req, res) => {
  try {
    const items = await Comment.find({ hidden: { $ne: true } }).sort({ createdAt: -1 }).limit(50);
    res.json(items.map(toPublic));
  } catch (err) {
    res.status(500).json({ error: 'Could not load comments.' });
  }
});

// GET /api/comments/stream - live feed. New comments are pushed here the moment they are posted.
router.get('/stream', (req, res) => {
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    'X-Accel-Buffering': 'no'
  });
  res.flushHeaders();
  res.write('retry: 3000\n\n');

  listeners.add(res);
  const heartbeat = setInterval(() => res.write(': ping\n\n'), 20000);

  req.on('close', () => {
    clearInterval(heartbeat);
    listeners.delete(res);
  });
});

// POST /api/comments
router.post('/', async (req, res) => {
  const { name, message, website } = req.body || {};

  // "website" is a hidden field only bots fill in. Pretend it worked and do nothing.
  if (website) return res.status(201).json({ ok: true });

  const cleanName = String(name || '').trim().slice(0, 60);
  const cleanMessage = String(message || '').trim();

  if (!cleanName || !cleanMessage) {
    return res.status(400).json({ error: 'Please add your name and a comment.' });
  }
  if (cleanMessage.length > 500) {
    return res.status(400).json({ error: 'Comments can be up to 500 characters.' });
  }
  if ((cleanMessage.match(/https?:\/\//gi) || []).length > 1) {
    return res.status(400).json({ error: 'Please keep links out of comments.' });
  }

  const key = req.ip;
  const now = Date.now();
  if (lastPost.has(key) && now - lastPost.get(key) < COOLDOWN_MS) {
    return res.status(429).json({ error: 'Please wait a few seconds before posting again.' });
  }
  lastPost.set(key, now);
  if (lastPost.size > 5000) lastPost.clear();

  try {
    const created = await Comment.create({ name: cleanName, message: cleanMessage });
    const comment = toPublic(created);
    broadcast(comment);
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Could not post your comment. Please try again.' });
  }
});

module.exports = router;
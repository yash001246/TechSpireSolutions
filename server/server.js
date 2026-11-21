require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '50kb' }));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/feedback', feedbackRoutes);

// In production, serve the built React app from the same server.
const clientBuild = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientBuild));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(clientBuild, 'index.html'), (err) => {
    if (err) next();
  });
});

mongoose
  .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/techspire')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  });

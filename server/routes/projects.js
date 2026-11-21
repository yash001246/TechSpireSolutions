const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

// GET /api/projects?tag=Web
router.get('/', async (req, res) => {
  try {
    const filter = req.query.tag && req.query.tag !== 'All' ? { tags: req.query.tag } : {};
    const projects = await Project.find(filter).sort({ createdAt: 1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Could not load projects.' });
  }
});

// GET /api/projects/:slug
router.get('/:slug', async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) return res.status(404).json({ error: 'Project not found.' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Could not load the project.' });
  }
});

module.exports = router;

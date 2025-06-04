const express = require('express');
const router = express.Router();
const Industry = require('../models/Industry');

// Create new industry data
router.post('/', async (req, res) => {
  try {
    const industry = new Industry(req.body);
    await industry.save();
    res.status(201).json({ message: 'Industry data saved successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all industries
router.get('/', async (req, res) => {
  const industries = await Industry.find({});
  res.json(industries);
});

// Get industry by name
router.get('/:industry', async (req, res) => {
  const data = await Industry.findOne({ industry: req.params.industry });
  if (!data) return res.status(404).json({ message: 'Not found' });
  res.json(data);
});

// Update industry
router.put('/:industry', async (req, res) => {
  try {
    const updated = await Industry.findOneAndUpdate(
      { industry: req.params.industry },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete industry
router.delete('/:industry', async (req, res) => {
  await Industry.deleteOne({ industry: req.params.industry });
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;

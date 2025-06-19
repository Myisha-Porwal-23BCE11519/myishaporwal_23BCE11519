const express = require('express');
const router = express.Router();
const Tutorial = require('../models/Tutorial');

//  Create a tutorial
router.post('/', async (req, res) => {
  try {
    const tutorial = await Tutorial.create(req.body);
    res.status(201).json(tutorial);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//  Get all tutorials
router.get('/', async (req, res) => {
  try {
    const tutorials = await Tutorial.find();
    res.json(tutorials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  Update a tutorial
router.put('/:id', async (req, res) => {
  try {
    const updated = await Tutorial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//  Delete a tutorial
router.delete('/:id', async (req, res) => {
  try {
    await Tutorial.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tutorial deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

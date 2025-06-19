const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
  title: String,
  description: String,
  published: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Tutorial', tutorialSchema);

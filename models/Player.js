const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  rank: Number,
  score: Number
});

module.exports = mongoose.model('Player', playerSchema);

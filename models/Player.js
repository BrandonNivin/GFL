const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  pos: Number
});

module.exports = mongoose.model('Player', playerSchema);

const Player = require('../models/Player');

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPlayer = async (req, res) => {
  const { name, pos } = req.body;
  try {
    const newPlayer = new Player({ name, pos });
    await newPlayer.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a player
exports.deletePlayer = async (req, res) => {
  const { id } = req.body;
  try {
    const deletedPlayer = await Player.findByIdAndDelete(id);
    if (!deletedPlayer) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json({ message: 'Player deleted', deletedPlayer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a player
exports.updatePlayer = async (req, res) => {
  const { id, name, pos } = req.body;
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(
      id,
      { name, pos },
      { new: true }
    );
    if (!updatedPlayer) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json(updatedPlayer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

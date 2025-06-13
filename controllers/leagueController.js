const League = require('../models/League');

exports.getAllLeagues = async (req, res) => {
  try {
    const leagues = await League.find().populate('players').populate('createdBy');
    res.json(leagues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createLeague = async (req, res) => {
  const { name, players, createdBy } = req.body;
  try {
    const newLeague = new League({ name, players, createdBy });
    await newLeague.save();
    res.status(201).json(newLeague);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a league
exports.deleteLeague = async (req, res) => {
  const { id } = req.body; // or use req.params.id if preferred
  try {
    const deletedLeague = await League.findByIdAndDelete(id);
    if (!deletedLeague) {
      return res.status(404).json({ message: 'League not found' });
    }
    res.json({ message: 'League deleted', deletedLeague });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a league
exports.updateLeague = async (req, res) => {
  const { id, name, players } = req.body; // you can also update createdBy if needed
  try {
    const updatedLeague = await League.findByIdAndUpdate(
      id,
      { name, players },
      { new: true, runValidators: true }
    );
    if (!updatedLeague) {
      return res.status(404).json({ message: 'League not found' });
    }
    res.json(updatedLeague);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

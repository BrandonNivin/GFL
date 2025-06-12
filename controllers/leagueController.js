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

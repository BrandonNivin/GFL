const express = require('express');
const router = express.Router();
const { getAllPlayers, createPlayer } = require('../controllers/playerController');

router.get('/', getAllPlayers);
router.post('/', createPlayer);

module.exports = router;


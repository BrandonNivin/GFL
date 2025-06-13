const express = require('express');
const router = express.Router();
const { getAllPlayers, createPlayer, deletePlayer, updatePlayer } = require('../controllers/playerController');

router.get('/', getAllPlayers);
router.post('/', createPlayer);
router.delete('/', deletePlayer);
router.put('/', updatePlayer);

module.exports = router;


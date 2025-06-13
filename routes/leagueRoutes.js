const express = require('express');
const router = express.Router();
const { getAllLeagues, createLeague, deleteLeague, updateLeague } = require('../controllers/leagueController');

router.get('/', getAllLeagues);
router.post('/', createLeague);
router.delete('/', deleteLeague);
router.put('/', updateLeague);

module.exports = router;

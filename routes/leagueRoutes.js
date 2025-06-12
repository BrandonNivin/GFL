const express = require('express');
const router = express.Router();
const { getAllLeagues, createLeague } = require('../controllers/leagueController');

router.get('/', getAllLeagues);
router.post('/', createLeague);

module.exports = router;

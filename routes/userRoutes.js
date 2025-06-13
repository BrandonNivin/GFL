const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, deleteUser, updateUser } = require('../controllers/UserController');

router.get('/', getAllUsers);
router.post('/', createUser);
router.delete('/', deleteUser);
router.put('/', updateUser);

module.exports = router;

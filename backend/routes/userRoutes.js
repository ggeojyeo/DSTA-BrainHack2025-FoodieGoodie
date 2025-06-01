// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/userController');

router.post('/register', createUser);
router.get('/', getUsers);
router.post('/login', loginUser);

module.exports = router;
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, getUsers, loginUser } = require('../controllers/userController');
const authMiddleware = require("../middleware/authMiddleware");


router.post('/register', createUser);
router.get('/', getUsers);
router.post('/login', loginUser);

module.exports = router;
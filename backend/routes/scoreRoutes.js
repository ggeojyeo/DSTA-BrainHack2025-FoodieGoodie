// routes/scoreRoutes.js
const express = require('express');
const router = express.Router();
const { getSupplyScore } = require('../controllers/scoreController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getSupplyScore);

module.exports = router;
// routes/scoreRoutes.js
const express = require('express');
const router = express.Router();
const { getSupplyScore } = require('../controllers/scoreController');

router.get('/', getSupplyScore);

module.exports = router;
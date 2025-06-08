const express = require('express');
const router = express.Router();
const { createSupplyQues, getSupplyQues, editSupplyQues } = require('../controllers/supplyQuesController');
const authMiddleware = require("../middleware/authMiddleware");

router.post('/create', authMiddleware, createSupplyQues);
router.get('/searchByUser', authMiddleware, getSupplyQues);
router.put('/edit', authMiddleware, editSupplyQues);

module.exports = router;
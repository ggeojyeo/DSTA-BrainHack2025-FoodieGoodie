const express = require('express');
const router = express.Router();
const { createSupplyQues, getSupplyQues, editSupplyQues } = require('../controllers/supplyQuesController');
const authMiddleware = require("../middleware/authMiddleware");

router.post('/create', createSupplyQues);
router.get('/searchByUser', getSupplyQues);
router.put('/edit', editSupplyQues);

module.exports = router;
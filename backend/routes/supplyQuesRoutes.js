const express = require('express');
const router = express.Router();
const { createSupplyQues, getSupplyQues, editSupplyQues } = require('../controllers/supplyQuesController');
const supplyQuesController = require("../controllers/supplyQuesController");
const authMiddleware = require("../middleware/authMiddleware");

router.post('/create', authMiddleware, supplyQuesController.createSupplyQues);
router.get('/searchByUser', authMiddleware, supplyQuesController.getSupplyQues);
router.put('/edit', authMiddleware, supplyQuesController.editSupplyQues);

module.exports = router;
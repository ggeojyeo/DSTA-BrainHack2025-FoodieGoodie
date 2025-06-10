const express = require('express');
const router = express.Router();
const { createHomeQues, getHomeQues, editHomeQues } = require('../controllers/homeQuesController');
const authMiddleware = require("../middleware/authMiddleware");

router.post('/create', authMiddleware, createHomeQues);
router.get('/searchByUser', authMiddleware, getHomeQues);
router.put('/edit', authMiddleware, editHomeQues);

module.exports = router;
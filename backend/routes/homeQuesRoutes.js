const express = require('express');
const router = express.Router();
const { createHomeQues, getHomeQues, editHomeQues } = require('../controllers/homeQuesController');
const homeQuesController = require('../controllers/homeQuesController');
const authMiddleware = require("../middleware/authMiddleware");

router.post('/create', authMiddleware, homeQuesController.createHomeQues);
router.get('/searchByUser', authMiddleware, homeQuesController.getHomeQues);
router.put('/edit', authMiddleware, homeQuesController.editHomeQues);

module.exports = router;
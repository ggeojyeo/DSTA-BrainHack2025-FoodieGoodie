const express = require('express');
const router = express.Router();
const { createHomeQues, getHomeQues, editHomeQues } = require('../controllers/homeQuesController');
const authMiddleware = require("../middleware/authMiddleware");

router.post('/create', createHomeQues);
router.get('/searchByUser', getHomeQues);
router.put('/edit', editHomeQues);

module.exports = router;
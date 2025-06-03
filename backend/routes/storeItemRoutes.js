const express = require('express');
const router = express.Router();
const { getAllStoreItems, getSpecificStoreItems } = require('../controllers/storeitemController');

router.get('/', getAllStoreItems);
router.get('/specific', getSpecificStoreItems);

module.exports = router;
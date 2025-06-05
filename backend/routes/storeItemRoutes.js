const express = require('express');
const router = express.Router();
const { getAllStoreItems, getAllSpecificStoreItems, getStoreItemByItemId, getStoreItemByStoreIdItemId } = require('../controllers/storeitemController');

router.get('/', getAllStoreItems);
router.get('/individualStore', getAllSpecificStoreItems);
router.get('/itemId', getStoreItemByItemId);
router.get('/storeIdItemId', getStoreItemByStoreIdItemId);

module.exports = router;
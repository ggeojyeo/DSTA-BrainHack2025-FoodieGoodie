const express = require('express');
const router = express.Router();
const { getAllStoreItems, getAllSpecificStoreItems, getStoreItemById, getStoreItemByStoreIdName } = require('../controllers/storeitemController');

router.get('/', getAllStoreItems);
router.get('/individualStore', getAllSpecificStoreItems);
router.get('/itemId', getStoreItemById);
router.get('/storeIdName', getStoreItemByStoreIdName);

module.exports = router;
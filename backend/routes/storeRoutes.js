const express = require('express');
const router = express.Router();
const { getNearbyStores, getNearestStoreWithRoute } = require('../controllers/storeController');

router.get('/nearbyStores', getNearbyStores);
router.get('/nearestStore', getNearestStoreWithRoute)

module.exports = router;
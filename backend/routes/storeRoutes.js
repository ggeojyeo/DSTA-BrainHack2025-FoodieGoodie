const express = require('express');
const router = express.Router();
const { getNearbyStores, getNearestStore, getDirectionsToStore } = require('../controllers/storeController');

router.get('/nearbyStores', getNearbyStores);
router.get('/nearestStore', getNearestStore)
router.get('/directionsToStore', getDirectionsToStore);

module.exports = router;
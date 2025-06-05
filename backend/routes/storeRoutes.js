const express = require('express');
const router = express.Router();
const { getAllStores, getStoreById, getNearbyStores, getNearestStore, getDirectionsToStore } = require('../controllers/storeController');

router.get('/allStores', getAllStores);
router.get('/storeById', getStoreById);
router.get('/nearbyStores', getNearbyStores);
router.get('/nearestStore', getNearestStore)
router.get('/directionsToStore', getDirectionsToStore);

module.exports = router;
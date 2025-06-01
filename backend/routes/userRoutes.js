const express = require('express');
const router = express.Router();
const { createUser, getUsers, getNearestStoreWithRoute, getNearbyStores } = require('../controllers/userController');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/nearestStore', getNearestStoreWithRoute)
router.get('/nearbyStores', getNearbyStores);

module.exports = router;
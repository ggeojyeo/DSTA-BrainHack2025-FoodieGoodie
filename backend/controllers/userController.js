const User = require('../models/User');
const { findNearbyStores, findDirections } = require('../services/mapService');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getNearestStoreWithRoute = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const nearbyStores = await findNearbyStores(latitude, longitude);
        const nearestStore = nearbyStores[0];
        const storeLatitude = nearestStore.geometry.location.lat;
        const storeLongitude = nearestStore.geometry.location.lng;

        const directions = await findDirections(latitude, longitude, storeLatitude, storeLongitude);
        res.json({
            store: nearestStore,
            directions: directions
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getNearbyStores = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const nearbyStores = await findNearbyStores(latitude, longitude);

        res.json({
            nearbyStores: nearbyStores
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

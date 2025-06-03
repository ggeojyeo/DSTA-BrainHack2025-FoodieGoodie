const StoreService = require('../services/storeService');
const MapService = require('../services/mapService');

exports.getAllStores = async (req, res) => {
    try {
        const stores = await StoreService.getAllStores();
        if (!stores || stores.length === 0) {
            return res.status(404).json({ error: 'No stores found' });
        }
        res.json({
            stores: stores
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getStoreById = async (req, res) => {
    try {
        const { specificStoreId } = req.query;
        const specificStore = await StoreService.getStoreById(specificStoreId);
        if (!specificStore) {
            return res.status(404).json({ error: 'Store not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getNearbyStores = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const nearbyStores = await MapService.findNearbyStores(latitude, longitude);

        res.json({
            nearbyStores: nearbyStores
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getNearestStore = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const nearbyStores = await MapService.findNearbyStores(latitude, longitude);
        const nearestStore = nearbyStores[0];

        res.json({
            store: nearestStore
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getDirectionsToStore = async (req, res) => {
    try {
        const { latitude, longitude, specificStoreId } = req.query;

        if (!latitude || !longitude || !specificStoreId) {
            return res.status(400).json({ error: 'Latitude, Longitude and Store ID are required' });
        }

        const store = await StoreService.getStoreById(specificStoreId);
        if (!store) {
            return res.status(404).json({ error: 'Store not found' });
        }

        const storeAddress = store.address;

        const directions = await MapService.findDirections(`${latitude}, ${longitude}`, storeAddress);

        res.json({
            directions: directions
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
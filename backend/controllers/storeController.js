const StoreService = require('../services/storeService');
const MapService = require('../services/mapService');
const axios = require("axios");

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

exports.getGoogleNearestStore = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const googleApiKey = process.env.GOOGLE_MAPS_API_KEY;

        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=supermarket&key=${googleApiKey}`;

        const response = await axios.get(url);
        const results = response.data.results;

        if (!results || results.length === 0) {
            return res.status(404).json({ error: 'No nearby stores found from Google Maps' });
        }

        const top = results[0]; // top result
        return res.json({
            name: top.name,
            address: top.vicinity,
            latitude: top.geometry.location.lat,
            longitude: top.geometry.location.lng,
            placeId: top.place_id
        });
    } catch (err) {
        console.error('Google API error:', err.message);
        res.status(500).json({ error: err.message });
    }
};

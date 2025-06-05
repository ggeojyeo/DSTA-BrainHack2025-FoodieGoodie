const axios = require('axios');
require('dotenv').config();

// This function finds the nearby grocery stores using Google Maps Places API
// It takes latitude and longitude as parameters and returns the nearby stores's details
async function findNearbyStores(latitude, longitude) {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&rankby=distance&type=grocery_or_supermarket&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if (response.data.results && response.data.results.length > 0) {
            return response.data.results;
        } else {
            throw new Error('No stores found nearby');
        }
    } catch (error) {
        throw new Error(`Error fetching nearby stores: ${error.message}`);
    }
}

// This function finds the directions from the user's location to the nearest grocery store
// It takes start and end coordinates as parameters and returns the route details
async function findDirections(origin, destination) {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&key=${apiKey}`;
    try {
        const response = await axios.get(url);

        if (response.data.routes && response.data.routes.length > 0) {
            return response.data.routes[0].legs[0];
        } else {
            throw new Error('No directions found');
        }
    } catch (error) {
        throw new Error(`Error fetching directions: ${error.message}`);
    }
}

module.exports = {
    findNearbyStores,
    findDirections
};
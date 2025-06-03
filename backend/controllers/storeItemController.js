const StoreItem = require('../models/StoreItem');
const ItemService = require('../services/itemService');

exports.getAllStoreItems = async (req, res) => {
    try {
        const allStoreItems = await StoreItem.find();
        res.json(allStoreItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllSpecificStoreItems = async (req, res) => {
    try {
        const { specificStoreId } = req.query;

        const storeitems = await StoreItem.find({ storeId: specificStoreId });
        if (!storeitems) {
            return res.status(404).json({ error: 'Store items not found' });
        }
        res.json(storeitems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getStoreItemById = async (req, res) => {
    try {
        const { itemId } = req.query;

        const storeItem = await StoreItem.findById(itemId);
        if (!storeItem) {
            return res.status(404).json({ error: 'Store item not found' });
        }
        res.json(storeItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getStoreItemByStoreIdName = async (req, res) => {
    try {
        const { specificStoreId, itemName } = req.query;

        const specificItem = await ItemService.getItemByName(itemName);
        const specificItemId = specificItem._id;

        const storeItem = await StoreItem.findOne({ storeId: specificStoreId, itemId: specificItemId });
        if (!storeItem) {
            return res.status(404).json({ error: 'Store item not found' });
        }
        res.json(storeItem);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
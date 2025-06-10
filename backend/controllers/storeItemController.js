const StoreItemService = require('../services/storeItemService');
const ItemService = require('../services/itemService');

exports.getAllStoreItems = async (req, res) => {
    try {
        const allStoreItems = await StoreItemService.getAllStoreItems();
        if (!allStoreItems || allStoreItems.length === 0) {
            return res.status(404).json({ error: 'No store items found' });
        }
        res.json(allStoreItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllSpecificStoreItems = async (req, res) => {
    try {
        const { specificStoreId } = req.query;

        const storeitems = await StoreItemService.getAllSpecificStoreItems(specificStoreId);
        if (!storeitems || storeitems.length === 0) {
            return res.status(404).json({ error: 'No store items found for the specified store' });
        }
        res.json(storeitems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getStoreItemByItemId = async (req, res) => {
    try {
        const { itemId } = req.query;

        const storeItem = await StoreItemService.getStoreItemById(itemId);
        if (!storeItem) {
            return res.status(404).json({ error: 'Store item not found' });
        }
        res.json(storeItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getStoreItemByStoreIdItemId = async (req, res) => {
    try {
        const { specificStoreId, itemName } = req.query;

        const specificItem = await ItemService.getItemByName(itemName);
        const specificItemId = specificItem._id;

        const storeItem = await StoreItemService.getStoreItemByStoreIdItemId(specificStoreId, specificItemId);
        if (!storeItem) {
            return res.status(404).json({ error: 'Store item not found for the specified store and item name' });
        }
        res.json(storeItem);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
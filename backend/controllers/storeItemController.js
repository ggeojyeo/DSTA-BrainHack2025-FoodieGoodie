const StoreItem = require('../models/StoreItem');

exports.getAllStoreItems = async (req, res) => {
    try {
        const allStoreItems = await StoreItem.find();
        res.json(allStoreItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSpecificStoreItems = async (req, res) => {
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
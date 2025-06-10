const StoreItem = require('../models/StoreItem');

exports.getAllStoreItems = async () => {
    return await StoreItem.find();
}

exports.getAllSpecificStoreItems = async (specificStoreId) => {
    return await StoreItem.find({ storeId: specificStoreId });
}

exports.getStoreItemByItemId = async (itemId) => {
    return await StoreItem.findById(itemId);
}

exports.getStoreItemByStoreIdItemId = async (specificStoreId, specificItemId) => {
    return await StoreItem.findOne({ storeId: specificStoreId, itemId: specificItemId });
}
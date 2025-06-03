const Store = require('../models/Store');

exports.getAllStores = async () => {
    return await Store.find();
}

exports.getStoreById = async (storeId) => {
    return await Store.findById(storeId);
}
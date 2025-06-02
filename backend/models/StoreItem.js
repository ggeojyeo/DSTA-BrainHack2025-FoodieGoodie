const mongoose = require('mongoose');

const StoreItemSchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Store ID is required"],
        ref: 'Store',
    },

    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Item ID is required"],
        ref: 'Item',
    },

    stock: {
        type: Number,
        required: [true, "Stock is required"],
        min: [0, "Stock cannot be negative"]
    },

    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be negative"]
    },
});

StoreItemSchema.index({ storeId: 1, itemId: 1 }, { unique: true });

module.exports = mongoose.model('StoreItem', StoreItemSchema);
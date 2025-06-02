const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Store ID is required"],
        unique: [true, "Store ID must be unique"],

        match: [/^[a-zA-Z0-9_-]+$/, "Store ID can only contain letters, numbers, underscores, and hyphens"],
        minLength: [8, "Store ID must be at least 8 characters long"],
        maxLength: [50, "Store ID must be at most 50 characters long"],
        trim: [true, "Store ID must be trimmed"],
    },

    name: {
        type: String,
        required: [true, "Store name is required"],
        
        minLength: [3, "Store name must be at least 3 characters long"],
        maxLength: [100, "Store name must be at most 100 characters long"],
        trim: [true, "Store name must be trimmed"],
    },

    address: {
        type: String,
        required: [true, "Location is required"],

        trim: [true, "Location must be trimmed"],
    },
});

module.exports = mongoose.model('Store', StoreSchema);
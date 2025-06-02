const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Item id is required"],
        unique: [true, "Item id must be unique"],

        minLength: [3, "Item id must be at least 3 characters long"],
        maxLength: [50, "Item id must be at most 50 characters long"],
        trim: [true, "Item id must be trimmed"],
    },

    barcode: {
        type: String,
        required: [true, "Barcode is required"],
        unique: [true, "Barcode must be unique"],

        trim: [true, "Barcode must be trimmed"],
    },

    category: {
        type: String,
        required: [true, "Category is required"],

        trim: [true, "Category must be trimmed"],
    },

    brand: {
        type: String,
        required: [true, "Brand is required"],
        
        trim: [true, "Brand must be trimmed"],
    },

    country: {
        type: String,
        required: [true, "Country is required"],

        trim: [true, "Country must be trimmed"],
    },

    image: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
    },

    name: {
        type: String,
        required: [true, "Name is required"],

        trim: [true, "Name must be trimmed"],
        minLength: [8, "Name must be at least 8 characters long"],
        maxLength: [100, "Name must be at most 100 characters long"],
      }

});

module.exports = mongoose.model('Item', ItemSchema);
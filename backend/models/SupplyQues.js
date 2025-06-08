const mongoose = require('mongoose');

const SupplyQuesSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    eggs: {
        type: Number,
        default: 0
    },
    milk: {
        type: Number,
        default: 0
    },
    bread: {
        type: Number,
        default: 0
    },
    rice: {
        type: Number,
        default: 0
    },
    snacks: {
        type: Number,
        default: 0
    },
    beverage: {
        type: Number,
        default: 0
    },
    cleaningSupplies: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('SupplyQues', SupplyQuesSchema);
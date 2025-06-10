const mongoose = require("mongoose");

const HomeQuesSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // one questionnaire per user
    },
    seniors: {
        type: Number,
        required: true,
        min: 0
    },
    adults: {
        type: Number,
        required: true,
        min: 0
    },
    children: {
        type: Number,
        required: true,
        min: 0
    },
    pets: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('HomeQues', HomeQuesSchema);
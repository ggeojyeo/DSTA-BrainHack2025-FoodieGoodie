const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"],

        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Invalid email format"],
        trim: true,
    },


    password: {
        type: String,
        required: [true, "Password is required"],

        match: [/^[\w!@#$%^&*()\-_=+<>?]+$/, "Password can contain letters, numbers, and special characters"],
        minLength: [8, "Password must be at least 8 characters long"],
        maxLength: [50, "Password must be at most 50 characters long"],
        trim: [true, "Password must be trimmed"],
    },

    mobile: {
        type: String,
        required: [true, "Mobile is required"],

        match: [/^\+[1-9]\d{0,2}([ -]?\d+)+$/, "Invalid mobile number format"],
        trim: [true, "Mobile must be trimmed"],
    },

    address: {
        type: String,
        required: [true, "Address is required"],

        trim: [true, "Address must be trimmed"],
    },

    notification: {
        type: Boolean,

        default: true,
    },
});

module.exports = mongoose.model('User', UserSchema);

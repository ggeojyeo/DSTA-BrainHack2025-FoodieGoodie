// models/ScheduledDonation.js
const mongoose = require("mongoose");

const scheduledDonationSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DonationItem",
    required: true
  },
  quantity: { type: Number, required: true },
  pickupDate: { type: Date, required: true },
  pickupTime: { type: String, required: true },
  location: { type: String, required: true },
  confirmedExpiryBuffer: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  userDeviceToken: { type: String } 
});

module.exports = mongoose.model("ScheduledDonations", scheduledDonationSchema);

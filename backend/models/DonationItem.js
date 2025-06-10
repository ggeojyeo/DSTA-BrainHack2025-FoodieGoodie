// models/DonationItem.js
const mongoose = require("mongoose");

const donationItemSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  isUrgent: { type: Boolean, default: false },
  tags: [String], // e.g., ["suggested"]
});

module.exports = mongoose.model('DonationItem', donationItemSchema);

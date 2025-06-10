// controllers/donationController.js
const DonationItem = require("../models/DonationItem");
const ScheduledDonations = require('../models/ScheduledDonations');

// GET all items (optionally filter urgent/suggested)
exports.getDonationItems = async (req, res) => {
  try {
    const { filter } = req.query;

    let query = {};
    if (filter === "urgent") query.isUrgent = true;
    if (filter === "suggested") query.tags = "suggested";

    const items = await DonationItem.find(query);
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST donation action
exports.createDonation = async (req, res) => {
  try {
    const { itemName, quantity } = req.body;
    // Save donation logic — depends on whether you want to track per-user or just logs
    res.status(200).json({ message: `Received donation of ${quantity}x item ${itemId}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.scheduleDonation = async (req, res) => {
    try {
      const { itemName, quantity, pickupDate, pickupTime, location, confirmedExpiryBuffer } = req.body;
  
      if (!confirmedExpiryBuffer) {
        return res.status(400).json({ error: "Please confirm expiry of goods." });
      }
  
      const donation = await ScheduledDonations.create({
        itemName, quantity, pickupDate, pickupTime, location, confirmedExpiryBuffer, email: req.user.email,
      });
  
      res.status(201).json({ message: "Donation scheduled!", id: donation._id });
    } catch (err) {
        console.error("Donation scheduling error:", err);
      res.status(500).json({ error: err.message });
    }
  };
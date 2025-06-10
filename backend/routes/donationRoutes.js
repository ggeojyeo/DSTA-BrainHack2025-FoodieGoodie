// routes/donationRoutes.js
const express = require("express");
const router = express.Router();
const donationController = require("../controllers/donationController");
const authMiddleware = require("../middleware/authMiddleware");
require('dotenv').config();

router.get("/donation-items", donationController.getDonationItems);
router.post("/donate", donationController.createDonation);
router.post("/schedule", authMiddleware, donationController.scheduleDonation);

module.exports = router;

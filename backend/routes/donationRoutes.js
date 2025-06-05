// routes/donationRoutes.js
const express = require("express");
const router = express.Router();
const donationController = require("../controllers/donationController");

router.get("/donation-items", donationController.getDonationItems);
router.post("/donate", donationController.createDonation);
router.post('/schedule', donationController.scheduleDonation);

module.exports = router;

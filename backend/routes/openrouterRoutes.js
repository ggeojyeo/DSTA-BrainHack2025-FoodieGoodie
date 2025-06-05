const express = require('express');
const router = express.Router();
const { getBrandAlternatives, getStoreAlternatives } = require('../controllers/openrouterController');

router.get('/brand-alternatives', getBrandAlternatives);
router.get('/store-alternatives', getStoreAlternatives);

module.exports = router;

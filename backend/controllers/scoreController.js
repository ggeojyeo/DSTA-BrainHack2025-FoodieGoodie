// controllers/scoreController.js

const HomeQues = require('../models/HomeQues');
const SupplyQues = require('../models/SupplyQues');
const { getRecommendedSupply, calculateSupplyScore } = require('../utils/calculateSupplyScore');

// GET /api/supply-score?username=
exports.getSupplyScore = async (req, res) => {
    try {
        const { username } = req.query;
        if (!username) {
            return res.status(400).json({ message: "Username is required." });
        }

        // Fetch home and supply records
        const homeQues = await HomeQues.findOne({ username });
        const supplyQues = await SupplyQues.findOne({ username });

        if (!homeQues || !supplyQues) {
            return res.status(404).json({ message: "Required data not found." });
        }

        // Calculate recommendation and score
        const recommendedSupply = getRecommendedSupply(homeQues);
        const score = calculateSupplyScore(recommendedSupply, supplyQues);

        res.status(200).json({
            message: "Supply fit score calculated.",
            score: score, // e.g. 86
            unit: '%',
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error." });
    }
};

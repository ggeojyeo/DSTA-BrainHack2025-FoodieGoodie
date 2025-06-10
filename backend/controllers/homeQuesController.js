// controllers/homeQuesController.js
const HomeQues = require('../models/HomeQues');


// POST /api/home-ques/create
exports.createHomeQues = async (req, res) => {
    try {
        const email = req.user.email;
        const { seniors, adults, children, pets } = req.body;

        // 1. Check if user already has a homeQues record
        const existing = await HomeQues.findOne({ email });
        if (existing) {
            return res.status(409).json({ message: "User already has a home questionnaire record. Use edit instead." });
        }

        // 2. Create new record
        const newHomeQues = new HomeQues({
            email,
            seniors,
            adults,
            children,
            pets,
        });

        // 3. Save to database
        await newHomeQues.save();
        res.status(201).json({ message: "Home questionnaire created", data: newHomeQues });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// GET /api/home-ques/searchByUser
exports.getHomeQues = async (req, res) => {
    try {
        const email = req.user.email;

        const homeQues = await HomeQues.findOne({ email })
        if (homeQues) {
            return res.status(200).json({ message: "Home Questionnaire found", data: homeQues })
        } else {
            return res.status(404).json({ message: "No record is found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

// PUT /api/home-ques/edit
exports.editHomeQues = async (req, res) => {
    try {
        const email = req.user.email;
        const { seniors, adults, children, pets } = req.body;

        const existing = await HomeQues.findOne({ email });
        if (!existing) {
            return res.status(409).json({ message: "User does not have a home questionnaire record. Create a new one." });
        }

        // Update the existing record
        existing.seniors = seniors;
        existing.adults = adults;
        existing.children = children;
        existing.pets = pets;

        await existing.save();
        res.status(200).json({
            message: "Home questionnaire updated successfully.",
            data: existing,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
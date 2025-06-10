// controllers/supplyQuesController.js
const SupplyQues = require('../models/SupplyQues');


// POST /api/supply-ques/create
exports.createSupplyQues = async (req, res) => {
    try {
        const email = req.user.email;
        const { eggs, milk, bread, rice, snacks, beverage, cleaningSupplies } = req.body;

        // 1. Check if user already has a supplyQues record
        const existing = await SupplyQues.findOne({ email });
        if (existing) {
            return res.status(409).json({ message: "User already has a supply questionnaire record. Use edit instead." });
        }

        // 2. Create new record
        const newSupplyQues = new SupplyQues({
            email,
            eggs,
            milk,
            bread,
            rice,
            snacks,
            beverage,
            cleaningSupplies,
        });

        // 3. Save to database
        await newSupplyQues.save();
        res.status(201).json({ message: "Supply questionnaire created", data: newSupplyQues });
    } catch (error) {
        console.error("Create Supply Error:", error);

        res.status(500).json({ message: "Server error" });
    }
};

// GET /api/supply-ques/searchByUser
exports.getSupplyQues = async (req, res) => {
    try {
        const email = req.user.email;

        const supplyQues = await SupplyQues.findOne({ email })
        if (supplyQues) {
            return res.status(200).json({ message: "Supply Questionnaire found", data: supplyQues })
        } else {
            return res.status(404).json({ message: "No record is found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

// PUT /api/supply-ques/edit
exports.editSupplyQues = async (req, res) => {
    try {
        const email = req.user.email;
        const { eggs, milk, bread, rice, snacks, beverage, cleaningSupplies } = req.body;

        const existing = await SupplyQues.findOne({ email });
        if (!existing) {
            return res.status(409).json({ message: "User does not have a supply questionnaire record. Create a new one." });
        }

        // Update the existing record
        existing.eggs = eggs;
        existing.milk = milk;
        existing.bread = bread;
        existing.rice = rice;
        existing.snacks = snacks;
        existing.beverage = beverage;
        existing.cleaningSupplies = cleaningSupplies;

        await existing.save();
        res.status(200).json({
            message: "Supply questionnaire updated successfully.",
            data: existing,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
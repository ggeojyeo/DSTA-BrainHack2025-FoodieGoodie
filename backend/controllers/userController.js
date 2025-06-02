// controllers/userController.js
const User = require('../models/User');
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

exports.createUser = async (req, res) => {
    console.log("Received request:", req.body);
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if (!user || user.password !== password) {
            return res.status(401).json({error: "Invalid credentials"});
        }

        const token = jwt.sign (
            {userId: user._id},
            JWT_SECRET,
            {expiresIn: "12h"}
        );

        res.json({token});
    } catch (err) {
        res.status(500).json({error: "Server error"})
    }
}
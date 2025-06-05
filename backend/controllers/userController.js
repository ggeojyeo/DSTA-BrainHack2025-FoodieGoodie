const User = require('../models/User');
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// POST /api/users/register
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET /api/users/
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// POST /api/users/login
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

//extra settings function
// DELETE /api/users/delete-account
exports.deleteAccount = async (req, res) => {
    try {
        const { username } = req.body;
        const deleted = await User.findOneAndDelete({ username });

        if (!deleted) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ message: "Account deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }
};

// PUT /api/users/update-username
exports.updateUsername = async (req, res) => {
    try {
        const { currentUsername, newUsername } = req.body;

        const updated = await User.findOneAndUpdate(
            { username: currentUsername }, //search criteria
            { username: newUsername }, //update values
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ message: "Username updated.", user: updated });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }
};

// PUT /api/user/update-password
exports.updatePassword = async (req, res) => {
    try {
        const { username, newPassword } = req.body;
        const updated = await User.findOneAndUpdate(
            { username }, //shorthand for { username: username }
            { password: newPassword },
            { new: true }
        );
        res.status(200).json({ message: "Password updated", data: updated });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }
};

// PUT /api/users/update-mobile
exports.updateMobile = async (req, res) => {
    try {
        const { username, mobile } = req.body;

        const updated = await User.findOneAndUpdate(
            { username },
            { mobile },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ message: "Mobile number updated.", user: updated });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }
};

// PUT /api/users/update-email
exports.updateEmail = async (req, res) => {
    try {
        const { username, email } = req.body;

        const updated = await User.findOneAndUpdate(
            { username },
            { email },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ message: "Email updated.", user: updated });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }
};

// PUT /api/users/update-address
exports.updateAddress = async (req, res) => {
    try {
        const { username, address } = req.body;

        const updated = await User.findOneAndUpdate(
            { username },
            { address },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ message: "Address updated.", user: updated });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }
};
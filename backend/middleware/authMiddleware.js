const jwt = require("jsonwebtoken");

// Hardcoded secret for now — later put this in .env
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
    const authHeader = req.headers.authorization;

    // Step 1: Check if token is present and valid format
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Missing or invalid token" });
    }

    const token = authHeader.split(" ")[1]; // Get the actual token string

    try {
        // Step 2: Verify token using the secret key
        const decoded = jwt.verify(token, JWT_SECRET);

        // Step 3: Attach decoded info to req for use in route
        req.user = decoded; // e.g., { userId: "abc123" }

        // Step 4: Go to the next middleware or route
        next();
    } catch (err) {
        // Step 5: If token is bad
        return res.status(401).json({ error: "Invalid token" });
    }
};
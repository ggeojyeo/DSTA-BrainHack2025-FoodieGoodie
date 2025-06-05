const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
require("./jobs/notificationScheduler");

const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const donationRoutes = require('./routes/donationRoutes'); 
app.use('/api', donationRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// User Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Home Questionnaire Routes
const homeQuesRoutes = require('./routes/homeQuesRoutes');
app.use('/api/home-ques', homeQuesRoutes);


// Supply Questionnaire Routes
const supplyQuesRoutes = require('./routes/supplyQuesRoutes');
app.use('/api/supply-ques', supplyQuesRoutes);


const PORT = process.env.PORT || 4000; //5000 doesnt work on postman idk why
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
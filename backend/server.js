const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
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
const storeRoutes = require('./routes/storeRoutes');
const itemRoutes = require('./routes/itemRoutes');
const storeItemRoutes = require('./routes/storeitemRoutes');
const openRouterRoutes = require('./routes/openrouterRoutes');

app.use('/api/users', userRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/storeitems', storeItemRoutes);
app.use('/api/openrouter', openRouterRoutes);

// Home Questionnaire Routes
const homeQuesRoutes = require('./routes/homeQuesRoutes');
app.use('/api/home-ques', homeQuesRoutes);

// Supply Questionnaire Routes
const supplyQuesRoutes = require('./routes/supplyQuesRoutes');
app.use('/api/supply-ques', supplyQuesRoutes);

// Calculate Supply Score Routes
const scoreRoutes = require('./routes/scoreRoutes');
app.use('/api/supply-score', scoreRoutes);



const PORT = process.env.PORT || 4000; //5000 doesnt work on postman idk why
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
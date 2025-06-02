const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/User');
const Store = require('./models/Store');

const sampleUsers = require('./data/sampleUsers');
const sampleStores = require('./data/sampleStores');

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');

        await User.deleteMany({});
        console.log('Existing users removed');
        await Store.deleteMany({});
        console.log('Existing stores removed');

        await User.insertMany(sampleUsers);
        console.log('Sample users seeded');
        await Store.insertMany(sampleStores);
        console.log('Sample stores seeded');

        mongoose.connection.close();
        console.log('Database connection closed');
    } catch (err) {
        console.error('Error seeding the database', err);
        mongoose.connection.close();
    }
};

seedDB();

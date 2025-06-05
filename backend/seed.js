const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/User');
const Store = require('./models/Store');
const Item = require('./models/Item');
const StoreItem = require('./models/StoreItem');

const sampleUsers = require('./data/sampleUsers');
const sampleStores = require('./data/sampleStores');
const sampleItems = require('./data/sampleItems');
const sampleStoreItems = require('./data/sampleStoreItems');

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');

        await User.deleteMany({});
        console.log('Existing users removed');
        await Store.deleteMany({});
        console.log('Existing stores removed');
        await Item.deleteMany({});
        console.log('Existing items removed');
        await StoreItem.deleteMany({});
        console.log('Existing store items removed');

        await User.insertMany(sampleUsers);
        console.log('Sample users seeded');
        const insertedStores = await Store.insertMany(sampleStores);
        console.log('Sample stores seeded');
        const insertedItems = await Item.insertMany(sampleItems);
        console.log('Sample items seeded');
      
        // Create id -> _id mapping
        const storeMap = Object.fromEntries(insertedStores.map(s => [s.id, s._id]));
        const itemMap = Object.fromEntries(insertedItems.map(i => [i.id, i._id]));
      
        // Replace storeId/itemId with _id
        const updatedSampleStoreItems = sampleStoreItems.map(entry => ({
          ...entry,
          storeId: storeMap[entry.storeId],
          itemId: itemMap[entry.itemId],
        }));
      
        // Insert store items
        await StoreItem.insertMany(updatedSampleStoreItems);

        mongoose.connection.close();
        console.log('Database connection closed');
    } catch (err) {
        console.error('Error seeding the database', err);
        mongoose.connection.close();
    }
};

seedDB();

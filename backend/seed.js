// // const mongoose = require('mongoose');
// // require('dotenv').config();

// // const User = require('./models/User');
// // const Store = require('./models/Store');
// // const Item = require('./models/Item');
// // const StoreItem = require('./models/StoreItem');

// // const sampleUsers = require('./data/sampleUsers');
// // const sampleStores = require('./data/sampleStores');
// // const sampleItems = require('./data/sampleItems');
// // const sampleStoreItems = require('./data/sampleStoreItems');

// // const seedDB = async () => {
// //     try {
// //         await mongoose.connect(process.env.MONGO_URI);
// //         console.log('MongoDB connected');

// //         await User.deleteMany({});
// //         console.log('Existing users removed');
// //         await Store.deleteMany({});
// //         console.log('Existing stores removed');
// //         await Item.deleteMany({});
// //         console.log('Existing items removed');
// //         await StoreItem.deleteMany({});
// //         console.log('Existing store items removed');

// //         await User.insertMany(sampleUsers);
// //         console.log('Sample users seeded');
// //         const insertedStores = await Store.insertMany(sampleStores);
// //         console.log('Sample stores seeded');
// //         const insertedItems = await Item.insertMany(sampleItems);
// //         console.log('Sample items seeded');

// //         // Create id -> _id mapping
// //         const storeMap = Object.fromEntries(insertedStores.map(s => [s.id, s._id]));
// //         const itemMap = Object.fromEntries(insertedItems.map(i => [i.id, i._id]));

// //         // Replace storeId/itemId with _id
// //         const updatedSampleStoreItems = sampleStoreItems.map(entry => ({
// //           ...entry,
// //           storeId: storeMap[entry.storeId],
// //           itemId: itemMap[entry.itemId],
// //         }));

// //         // Insert store items
// //         await StoreItem.insertMany(updatedSampleStoreItems);

// //         mongoose.connection.close();
// //         console.log('Database connection closed');
// //     } catch (err) {
// //         console.error('Error seeding the database', err);
// //         mongoose.connection.close();
// //     }
// // };

// // seedDB();

// const mongoose = require('mongoose');
// require('dotenv').config();

// const User = require('./models/User');
// const Store = require('./models/Store');
// const Item = require('./models/Item');
// const StoreItem = require('./models/StoreItem');
// const DonationItem = require('./models/DonationItem');
// const ScheduledDonation = require('./models/ScheduledDonations');

// const sampleUsers = require('./data/sampleUsers');
// const sampleStores = require('./data/sampleStores');
// const sampleItems = require('./data/sampleItems');
// const sampleStoreItems = require('./data/sampleStoreItems');
// const sampleDonationItems = require('./data/sampleDonationItems');
// const sampleScheduledDonations = require('./data/sampleScheduledDonations');

// const seedDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log('MongoDB connected');

//         // Clear existing data
//         await User.deleteMany({});
//         await Store.deleteMany({});
//         await Item.deleteMany({});
//         await StoreItem.deleteMany({});
//         await DonationItem.deleteMany({});
//         await ScheduledDonation.deleteMany({});
//         console.log('Existing documents removed');

//         // Seed basic entities
//         await User.insertMany(sampleUsers);
//         const insertedStores = await Store.insertMany(sampleStores);
//         const insertedItems = await Item.insertMany(sampleItems);
//         console.log('Users, Stores, and Items seeded');

//         // Map store/item IDs to MongoDB ObjectIds
//         const storeMap = Object.fromEntries(insertedStores.map(s => [s.id, s._id]));
//         const itemMap = Object.fromEntries(insertedItems.map(i => [i.id, i._id]));

//         // Replace storeId/itemId in StoreItems
//         const updatedSampleStoreItems = sampleStoreItems.map(entry => ({
//             ...entry,
//             storeId: storeMap[entry.storeId],
//             itemId: itemMap[entry.itemId],
//         }));
//         await StoreItem.insertMany(updatedSampleStoreItems);
//         console.log('Store items seeded');

//         // Seed donation items
//         const insertedDonationItems = await DonationItem.insertMany(sampleDonationItems);
//         console.log('Donation items seeded');

//         // Map donation item IDs for linking in scheduled donations
//         const donationMap = Object.fromEntries(insertedDonationItems.map(d => [d.id, d._id]));

//         // Replace itemId in ScheduledDonations
//         const updatedScheduledDonations = sampleScheduledDonations.map(entry => ({
//             ...entry,
//             itemId: donationMap[entry.itemId]
//         }));
//         await ScheduledDonation.insertMany(updatedScheduledDonations);
//         console.log('Scheduled donations seeded');

//         mongoose.connection.close();
//         console.log('Database seeding complete and connection closed');
//     } catch (err) {
//         console.error('Error seeding the database:', err);
//         mongoose.connection.close();
//     }
// };

// seedDB();

const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/User');
const Store = require('./models/Store');
const Item = require('./models/Item');
const StoreItem = require('./models/StoreItem');
const DonationItem = require('./models/DonationItem');
const ScheduledDonation = require('./models/ScheduledDonations');

const sampleUsers = require('./data/sampleUsers');
const sampleStores = require('./data/sampleStores');
const sampleItems = require('./data/sampleItems');
const sampleStoreItems = require('./data/sampleStoreItems');
const sampleDonationItems = require('./data/sampleDonationItems');
const sampleScheduledDonations = require('./data/sampleScheduledDonations');

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');

        // Clear collections
        await User.deleteMany({});
        await Store.deleteMany({});
        await Item.deleteMany({});
        await StoreItem.deleteMany({});
        await DonationItem.deleteMany({});
        await ScheduledDonation.deleteMany({});
        console.log('Existing documents removed');

        // Seed Users, Stores, Items
        await User.insertMany(sampleUsers);
        const insertedStores = await Store.insertMany(sampleStores);
        const insertedItems = await Item.insertMany(sampleItems);
        console.log('Users, Stores, and Items seeded');

        // Map storeId/itemId to ObjectIds
        const storeMap = Object.fromEntries(insertedStores.map(s => [s.id, s._id]));
        const itemMap = Object.fromEntries(insertedItems.map(i => [i.id, i._id]));

        const updatedSampleStoreItems = sampleStoreItems.map(entry => ({
            ...entry,
            storeId: storeMap[entry.storeId],
            itemId: itemMap[entry.itemId],
        }));
        await StoreItem.insertMany(updatedSampleStoreItems);
        console.log('Store items seeded');

        // Insert donation items
        const insertedDonationItems = await DonationItem.insertMany(sampleDonationItems);
        console.log('Donation items seeded');

        // Build name → _id map for donations
        const donationMap = Object.fromEntries(insertedDonationItems.map(d => [d.name, d._id]));

        // Replace itemName with ObjectId
        const updatedScheduledDonations = sampleScheduledDonations.map(entry => ({
            ...entry,
            itemId: donationMap[entry.itemName] // Keep itemName in doc, add itemId
        }));

        await ScheduledDonation.insertMany(updatedScheduledDonations);
        console.log('Scheduled donations seeded');

        mongoose.connection.close();
        console.log('Database seeding complete and connection closed');
    } catch (err) {
        console.error('Error seeding the database:', err);
        mongoose.connection.close();
    }
};

seedDB();

const Item = require('../models/Item');

const getItemByName = async (itemName) => {
    try {
        const item = await Item.findOne({ name: { $regex: itemName, $options: 'i' } });
        if (!item) {
            throw new Error('Item not found');
        }
        return item;
    }
    catch (error) {
        throw new Error(`Error fetching item by name: ${error.message}`);
    }
}

const getItemsByCategory = async (category) => {
    try {
        const items = await Item.find({ category: { $regex: category, $options: 'i' } });
        if (!items || items.length === 0) {
            throw new Error('No items found in this category');
        }
        return items;
    }
    catch (error) {
        throw new Error(`Error fetching items by category: ${error.message}`);
    }
}

module.exports = {
    getItemByName,
    getItemsByCategory,
};
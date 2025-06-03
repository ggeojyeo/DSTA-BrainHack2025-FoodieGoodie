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

module.exports = {
    getItemByName
};
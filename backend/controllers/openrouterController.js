const StoreItemService = require('../services/storeItemService');
const ItemService = require('../services/itemService');
const StoreService = require('../services/storeService');
const OpenRouterService = require('../services/openrouterService');

exports.getBrandAlternatives = async (req, res) => {
    try {
        const { storeId, itemName } = req.query;

        if (!storeId || !itemName) {
            return res.status(400).json({ error: 'storeId and itemName are required' });
        }

        // Step 1: Get item by name
        const targetItem = await ItemService.getItemByName(itemName);
        if (!targetItem) return res.status(404).json({ error: 'Item not found' });

        const { _id: itemId, category, brand: targetBrand, name: targetName } = targetItem;

        // Step 2: Get this item's stock at current store
        const targetStoreItem = await StoreItemService.getStoreItemByStoreIdItemId(storeId, itemId);
        const isLowOrMissing = !targetStoreItem || (targetStoreItem.stock <= targetStoreItem.threshold);

        if (!isLowOrMissing) {
            return res.status(200).json({ message: 'Item is in stock above threshold. No recommendation needed.' });
        }

        // Step 3: Get all items in same category except same brand
        const allInCategory = await ItemService.getItemsByCategory(category);
        const filtered = allInCategory.filter(item => item.brand !== targetBrand);

        // Step 4: Get matching store items (same store, in stock)
        const alternatives = [];
        for (const item of filtered) {
            const storeItem = await StoreItemService.getStoreItemByStoreIdItemId(storeId, item._id);
            if (storeItem && storeItem.stock > storeItem.threshold) {
                alternatives.push({
                    name: item.name,
                    brand: item.brand,
                    country: item.country,
                    price: storeItem.price,
                    stock: storeItem.stock
                });
            }
        }

        if (alternatives.length === 0) {
            return res.status(200).json({ message: 'No alternative items available at this store.' });
        }

        // Step 5: Prompt OpenRouter with concise + guided input
        const prompt = `A user searched for "${targetName}" in the "${category}" category, but it is out of stock at their selected store.
        Here are some in-stock alternative items from different brands and countries at the same store:
        
        ${JSON.stringify(alternatives)}
        
        Please recommend 2 suitable alternatives in JSON format with name, brand, country, price, and stock.
        Prefer items that are well-stocked, reasonably priced, and ideally from the same country of origin as the original item if possible.`;

        const aiResponse = await OpenRouterService.getRecommendations(prompt);
        res.json({ recommendations: aiResponse });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getStoreAlternatives = async (req, res) => {
    try {
        const { storeId, itemName } = req.query;

        if (!storeId || !itemName) {
            return res.status(400).json({ error: 'itemName and storeId are required' });
        }

        // Step 1: Get the item by name
        const item = await ItemService.getItemByName(itemName);
        if (!item) return res.status(404).json({ error: 'Item not found' });

        const { _id: itemId, name, brand } = item;

        // Step 2: Check stock in current store
        const storeItem = await StoreItemService.getStoreItemByStoreIdItemId(storeId, itemId);
        if (storeItem && storeItem.stock > storeItem.threshold) {
            return res.status(200).json({ message: 'Item is in stock at current store. No redirection needed.' });
        }

        // Step 3: Get all stores and filter for same itemId with stock > threshold
        const allStores = await StoreService.getAllStores();
        const otherStoreItems = [];

        for (const store of allStores) {
            if (store._id.toString() === storeId) continue;

            const otherItem = await StoreItemService.getStoreItemByStoreIdItemId(store._id, itemId);
            if (otherItem && otherItem.stock > otherItem.threshold) {
                otherStoreItems.push({
                    // storeId: store._id,
                    storeName: store.name,
                    address: store.address,
                    price: otherItem.price,
                    stock: otherItem.stock
                });
            }
        }

        if (otherStoreItems.length === 0) {
            return res.status(200).json({ message: 'No other stores have this item in stock above threshold.' });
        }

        // Step 4: Prompt OpenRouter to rank top 2
        const prompt = `A customer searched for "${name}" (brand: ${brand}), but it is out of stock at their selected store.
        Here is a list of other nearby stores that have this exact item in stock above threshold:
        
        ${JSON.stringify(otherStoreItems)}
        
        Please recommend the top 2 stores from this list in JSON format.
        Each entry should include storeName, address, price, and stock.
        Prioritize stores with better stock levels and competitive prices.`;
        
        const recommendations = await OpenRouterService.getRecommendations(prompt);
        res.json({ recommendations });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

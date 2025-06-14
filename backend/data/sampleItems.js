const sampleItems = [
    {
        id: 'egg1',
        barcode: '888888880001',
        category: 'eggs',
        brand: "Chew's",
        country: 'Singapore',
        image: 'https://coldstorage.com.sg/medias/101640975.jpg',
        name: "Chew's Fresh Eggs Grade AA 10s",
        unitQuantity: 10,
        unitType: '1'
    },
    {
        id: 'egg2',
        barcode: '888888880002',
        category: 'eggs',
        brand: 'Seng Choon',
        country: 'Singapore',
        image: 'https://coldstorage.com.sg/medias/101658993.jpg',
        name: 'Seng Choon Farm Fresh Eggs 10s',
        unitQuantity: 10,
        unitType: '1'
    },
    {
        id: 'egg3',
        barcode: '888888880003',
        category: 'eggs',
        brand: 'Pasar',
        country: 'Malaysia',
        image: 'https://www.fairprice.com.sg/medias/13190663.jpg',
        name: 'Pasar Fresh Eggs 10s',
        unitQuantity: 10,
        unitType: '1'
    },
    {
        id: 'egg4',
        barcode: '888888880004',
        category: 'eggs',
        brand: 'Dasoon',
        country: 'Malaysia',
        image: 'https://www.komalasvegemart.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/d/a/dasoon-high-quality-fresh-eggs-10s.jpg',
        name: 'Dasoon Omega-3 Eggs 10s',
        unitQuantity: 10,
        unitType: '1'
    },
    {
        id: 'egg5',
        barcode: '888888880005',
        category: 'eggs',
        brand: 'Kampong',
        country: 'Singapore',
        image: 'https://kiasumart.com/wp-content/uploads/2021/04/Kampong-Fresh-Eggs-10s.jpg',
        name: 'Kampong Free Range Eggs 10s',
        unitQuantity: 10,
        unitType: '1'
    },
    {
        id: 'milk1',
        barcode: '4902430651469',
        category: 'dairy',
        brand: 'Meiji',
        country: 'Singapore',
        image: 'https://www.vshop.sg/wp-content/uploads/2019/11/Meiji-Fresh-Milk-2L.jpg',
        name: 'Meiji Fresh Milk 2L',
        unitQuantity: 2,
        unitType: 'L'
    },
    {
        id: 'milk2',
        barcode: '888888880006',
        category: 'dairy',
        brand: 'Magnolia',
        country: 'Singapore',
        image: 'https://shop.villamarket.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/m/a/magnolia-fresh-milk-2l.jpg',
        name: 'Magnolia Fresh Milk 2L',
        unitQuantity: 2,
        unitType: 'L'
    },
    {
        id: 'milk3',
        barcode: '888888880007',
        category: 'dairy',
        brand: 'Farmhouse',
        country: 'Singapore',
        image: 'https://coldstorage.com.sg/medias/101643584.jpg',
        name: 'Farmhouse Fresh Milk 2L',
        unitQuantity: 2,
        unitType: 'L'
    },
    {
        id: 'milk4',
        barcode: '888888880008',
        category: 'dairy',
        brand: "Paul's",
        country: 'Australia',
        image: null,
        name: "Paul's Fresh Milk 2L",
        unitQuantity: 2,
        unitType: 'L'
    },
    {
        id: 'milk5',
        barcode: '888888880009',
        category: 'dairy',
        brand: 'Cowhead',
        country: 'Australia',
        image: null,
        name: 'Cowhead Fresh Milk 2L',
        unitQuantity: 2,
        unitType: 'L'
    },
    {
        id: 'bread1',
        barcode: '8888145004563',
        category: 'bakery',
        brand: 'Gardenia',
        country: 'Singapore',
        image: null,
        name: 'Gardenia White Bread 600g',
        unitQuantity: 0.6,
        unitType: 'kg'
    },
    {
        id: 'bread2',
        barcode: '888888880010',
        category: 'bakery',
        brand: 'Sunshine',
        country: 'Singapore',
        image: null,
        name: 'Sunshine Soft White Bread 600g',
        unitQuantity: 0.6,
        unitType: 'kg'
    },
    {
        id: 'bread3',
        barcode: '888888880011',
        category: 'bakery',
        brand: 'Holsum',
        country: 'Singapore',
        image: null,
        name: 'Holsum Soft White Bread 600g',
        unitQuantity: 0.6,
        unitType: 'kg'
    },
    {
        id: 'bread4',
        barcode: '888888880012',
        category: 'bakery',
        brand: 'Mission',
        country: 'Malaysia',
        image: null,
        name: 'Mission Wraps Original 8s',
        unitQuantity: 8,
        unitType: '1'
    },
    {
        id: 'bread5',
        barcode: '888888880013',
        category: 'bakery',
        brand: 'Gardenia',
        country: 'Singapore',
        image: null,
        name: 'Gardenia Wholemeal Bread 600g',
        unitQuantity: 0.6,
        unitType: 'kg'
    },
    {
        id: 'rice1',
        barcode: '8885008021047',
        category: 'grains',
        brand: 'Golden Phoenix',
        country: 'Thailand',
        image: null,
        name: 'Golden Phoenix Thai Fragrant Rice 5kg',
        unitQuantity: 5,
        unitType: 'kg'
    },
    {
        id: 'rice2',
        barcode: '888888880014',
        category: 'grains',
        brand: 'Royal Umbrella',
        country: 'Thailand',
        image: null,
        name: 'Royal Umbrella Thai Hom Mali Rice 5kg',
        unitQuantity: 5,
        unitType: 'kg'
    },
    {
        id: 'rice3',
        barcode: '888888880015',
        category: 'grains',
        brand: 'Sakura',
        country: 'Thailand',
        image: null,
        name: 'Sakura Jasmine Rice 5kg',
        unitQuantity: 5,
        unitType: 'kg'
    },
    {
        id: 'rice4',
        barcode: '888888880016',
        category: 'grains',
        brand: 'SongHe',
        country: 'Vietnam',
        image: null,
        name: 'SongHe AAA Thai Fragrant Rice 5kg',
        unitQuantity: 5,
        unitType: 'kg'
    },
    {
        id: 'rice5',
        barcode: '888888880017',
        category: 'grains',
        brand: 'Simei',
        country: 'Thailand',
        image: null,
        name: 'Simei Thai Fragrant Rice 5kg',
        unitQuantity: 5,
        unitType: 'kg'
    },
    {
        id: 'snack1',
        barcode: '9556103003143',
        category: 'snacks',
        brand: 'Jack n Jill',
        country: 'Malaysia',
        image: null,
        name: 'Jack n Jill Potato Chips Original 60g',
        unitQuantity: 0.06,
        unitType: 'kg'
    },
    {
        id: 'snack2',
        barcode: '888888880018',
        category: 'snacks',
        brand: 'Pringles',
        country: 'USA',
        image: null,
        name: 'Pringles Sour Cream 110g',
        unitQuantity: 0.11,
        unitType: 'kg'
    },
    {
        id: 'snack3',
        barcode: '888888880019',
        category: 'snacks',
        brand: 'Calbee',
        country: 'Japan',
        image: null,
        name: 'Calbee Hot & Spicy Potato Chips 80g',
        unitQuantity: 0.08,
        unitType: 'kg'
    },
    {
        id: 'snack4',
        barcode: '888888880020',
        category: 'snacks',
        brand: "Lay's",
        country: 'USA',
        image: null,
        name: "Lay's Classic Potato Chips 170g",
        unitQuantity: 0.17,
        unitType: 'kg'
    },
    {
        id: 'snack5',
        barcode: '888888880021',
        category: 'snacks',
        brand: 'Ritz',
        country: 'USA',
        image: null,
        name: 'Ritz Cheese Crackers 190g',
        unitQuantity: 0.19,
        unitType: 'kg'
    },
    {
        id: 'beverage1',
        barcode: '9556169931786',
        category: 'beverages',
        brand: 'Pokka',
        country: 'Singapore',
        image: null,
        name: 'Pokka Green Tea No Sugar 500ml',
        unitQuantity: 0.5,
        unitType: 'L'
    },
    {
        id: 'beverage2',
        barcode: '888888880022',
        category: 'beverages',
        brand: 'Heaven & Earth',
        country: 'Singapore',
        image: null,
        name: 'Heaven & Earth Jasmine Green Tea 500ml',
        unitQuantity: 0.5,
        unitType: 'L'
    },
    {
        id: 'beverage3',
        barcode: '888888880023',
        category: 'beverages',
        brand: 'Coca-Cola',
        country: 'USA',
        image: 'https://paloma-eshop.com/coca-cola-classicoriginal-320ml',
        name: 'Coca-Cola Classic Can 320ml',
        unitQuantity: 0.32,
        unitType: 'L'
    },
    {
        id: 'beverage4',
        barcode: '888888880024',
        category: 'beverages',
        brand: 'Sprite',
        country: 'USA',
        image: 'https://oakandbarrel.com.sg/products/sprite-cans',
        name: 'Sprite Can 320ml',
        unitQuantity: 0.32,
        unitType: 'L'
    },
    {
        id: 'beverage5',
        barcode: '888888880025',
        category: 'beverages',
        brand: 'F&N',
        country: 'Singapore',
        image: 'https://www.lazada.com.my/products/fn-orange-15l-x-12-i2948710423.html',
        name: 'F&N Orange Crush 1.5L',
        unitQuantity: 1.5,
        unitType: 'L'
    },
    {
        id: 'clean1',
        barcode: '8888021200127',
        category: 'cleaning',
        brand: 'TOP',
        country: 'Malaysia',
        image: 'https://marketplaces.sg/product/top-liquid-detergent-super-low-suds-colour-protect-2-8kg/',
        name: 'TOP Liquid Detergent Super Colour 2.8kg',
        unitQuantity: 2.8,
        unitType: 'kg'
    },
    {
        id: 'clean2',
        barcode: '888888880026',
        category: 'cleaning',
        brand: 'Dynamo',
        country: 'Singapore',
        image: 'https://shopee.com.my/Dynamo-Power-Gel-Detergent-Bottle-2.7KG-Top-load-Front-Load-Anti-bacterial-Color-Care-Odor-Removal-Downy-Passion-i.146741462.7117074024',
        name: 'Dynamo Power Gel 2.7kg',
        unitQuantity: 2.7,
        unitType: 'kg'
    },
    {
        id: 'clean3',
        barcode: '888888880027',
        category: 'cleaning',
        brand: 'Magiclean',
        country: 'Japan',
        image: 'https://homemartsg.com/product/magiclean-floor-clean-flower-bliss-2l/',
        name: 'Magiclean Floor Cleaner 2L',
        unitQuantity: 2,
        unitType: 'L'
    },
    {
        id: 'clean4',
        barcode: '888888880028',
        category: 'cleaning',
        brand: 'Dettol',
        country: 'UK',
        image: 'https://www.bmstores.co.uk/products/dettol-antiseptic-disinfectant-liquid-750ml-352131',
        name: 'Dettol Antiseptic Liquid 750ml',
        unitQuantity: 0.75,
        unitType: 'L'
    },
    {
        id: 'clean5',
        barcode: '888888880029',
        category: 'cleaning',
        brand: 'Walch',
        country: 'Singapore',
        image: 'https://www.watsons.com.hk/en/walch-multi-purpose-disinfectant-2x-2l-630ml/p/BP_417504',
        name: 'Walch Multi-Purpose Disinfectant 2L',
        unitQuantity: 2,
        unitType: 'L'
    }
];

module.exports = sampleItems;
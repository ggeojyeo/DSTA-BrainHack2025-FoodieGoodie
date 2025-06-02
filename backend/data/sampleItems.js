const sampleItems = [
    {
        id: 'egg2',
        barcode: '888888880001',
        category: 'eggs',
        brand: 'Chew\'s',
        country: 'Singapore',
        image: null,
        name: 'Chew\'s Fresh Eggs Grade AA 10s'
    },
    {
        id: 'egg3',
        barcode: '888888880002',
        category: 'eggs',
        brand: 'Seng Choon',
        country: 'Singapore',
        image: null,
        name: 'Seng Choon Farm Fresh Eggs 10s'
    },
    {
        id: 'egg4',
        barcode: '888888880003',
        category: 'eggs',
        brand: 'Pasar',
        country: 'Malaysia',
        image: null,
        name: 'Pasar Fresh Eggs 10s'
    },
    {
        id: 'egg5',
        barcode: '888888880004',
        category: 'eggs',
        brand: 'Dasoon',
        country: 'Malaysia',
        image: null,
        name: 'Dasoon Omega-3 Eggs 10s'
    },
    {
        id: 'egg6',
        barcode: '888888880005',
        category: 'eggs',
        brand: 'Kampong',
        country: 'Singapore',
        image: null,
        name: 'Kampong Free Range Eggs 10s'
    },

    {
        id: 'milk1',
        barcode: '4902430651469',
        category: 'dairy',
        brand: 'Meiji',
        country: 'Singapore',
        image: null,
        name: 'Meiji Fresh Milk 2L'
    },
    {
        id: 'milk2',
        barcode: '888888880006',
        category: 'dairy',
        brand: 'Magnolia',
        country: 'Singapore',
        image: null,
        name: 'Magnolia Fresh Milk 2L'
    },
    {
        id: 'milk3',
        barcode: '888888880007',
        category: 'dairy',
        brand: 'Farmhouse',
        country: 'Singapore',
        image: null,
        name: 'Farmhouse Fresh Milk 2L'
    },
    {
        id: 'milk4',
        barcode: '888888880008',
        category: 'dairy',
        brand: 'Paul\'s',
        country: 'Australia',
        image: null,
        name: 'Paul\'s Fresh Milk 2L'
    },
    {
        id: 'milk5',
        barcode: '888888880009',
        category: 'dairy',
        brand: 'Cowhead',
        country: 'Australia',
        image: null,
        name: 'Cowhead Fresh Milk 2L'
    },

    {
        id: 'bread1',
        barcode: '8888145004563',
        category: 'bakery',
        brand: 'Gardenia',
        country: 'Singapore',
        image: null,
        name: 'Gardenia White Bread 600g'
    },
    {
        id: 'bread2',
        barcode: '888888880010',
        category: 'bakery',
        brand: 'Sunshine',
        country: 'Singapore',
        image: null,
        name: 'Sunshine Soft White Bread 600g'
    },
    {
        id: 'bread3',
        barcode: '888888880011',
        category: 'bakery',
        brand: 'Holsum',
        country: 'Singapore',
        image: null,
        name: 'Holsum Soft White Bread 600g'
    },
    {
        id: 'bread4',
        barcode: '888888880012',
        category: 'bakery',
        brand: 'Mission',
        country: 'Malaysia',
        image: null,
        name: 'Mission Wraps Original 8s'
    },
    {
        id: 'bread5',
        barcode: '888888880013',
        category: 'bakery',
        brand: 'Gardenia',
        country: 'Singapore',
        image: null,
        name: 'Gardenia Wholemeal Bread 600g'
    },

    {
        id: 'rice1',
        barcode: '8885008021047',
        category: 'grains',
        brand: 'Golden Phoenix',
        country: 'Thailand',
        image: null,
        name: 'Golden Phoenix Thai Fragrant Rice 5kg'
    },
    {
        id: 'rice2',
        barcode: '888888880014',
        category: 'grains',
        brand: 'Royal Umbrella',
        country: 'Thailand',
        image: null,
        name: 'Royal Umbrella Thai Hom Mali Rice 5kg'
    },
    {
        id: 'rice3',
        barcode: '888888880015',
        category: 'grains',
        brand: 'Sakura',
        country: 'Thailand',
        image: null,
        name: 'Sakura Jasmine Rice 5kg'
    },
    {
        id: 'rice4',
        barcode: '888888880016',
        category: 'grains',
        brand: 'SongHe',
        country: 'Vietnam',
        image: null,
        name: 'SongHe AAA Thai Fragrant Rice 5kg'
    },
    {
        id: 'rice5',
        barcode: '888888880017',
        category: 'grains',
        brand: 'Simei',
        country: 'Thailand',
        image: null,
        name: 'Simei Thai Fragrant Rice 5kg'
    },

    {
        id: 'snack1',
        barcode: '9556103003143',
        category: 'snacks',
        brand: 'Jack n Jill',
        country: 'Malaysia',
        image: null,
        name: 'Jack n Jill Potato Chips Original 60g'
    },
    {
        id: 'snack2',
        barcode: '888888880018',
        category: 'snacks',
        brand: 'Pringles',
        country: 'USA',
        image: null,
        name: 'Pringles Sour Cream 110g'
    },
    {
        id: 'snack3',
        barcode: '888888880019',
        category: 'snacks',
        brand: 'Calbee',
        country: 'Japan',
        image: null,
        name: 'Calbee Hot & Spicy Potato Chips 80g'
    },
    {
        id: 'snack4',
        barcode: '888888880020',
        category: 'snacks',
        brand: 'Lay\'s',
        country: 'USA',
        image: null,
        name: 'Lay\'s Classic Potato Chips 170g'
    },
    {
        id: 'snack5',
        barcode: '888888880021',
        category: 'snacks',
        brand: 'Ritz',
        country: 'USA',
        image: null,
        name: 'Ritz Cheese Crackers 190g'
    },

    {
        id: 'beverage1',
        barcode: '9556169931786',
        category: 'beverages',
        brand: 'Pokka',
        country: 'Singapore',
        image: null,
        name: 'Pokka Green Tea No Sugar 500ml'
    },
    {
        id: 'beverage2',
        barcode: '888888880022',
        category: 'beverages',
        brand: 'Heaven & Earth',
        country: 'Singapore',
        image: null,
        name: 'Heaven & Earth Jasmine Green Tea 500ml'
    },
    {
        id: 'beverage3',
        barcode: '888888880023',
        category: 'beverages',
        brand: 'Coca-Cola',
        country: 'USA',
        image: null,
        name: 'Coca-Cola Classic Can 320ml'
    },
    {
        id: 'beverage4',
        barcode: '888888880024',
        category: 'beverages',
        brand: 'Sprite',
        country: 'USA',
        image: null,
        name: 'Sprite Can 320ml'
    },
    {
        id: 'beverage5',
        barcode: '888888880025',
        category: 'beverages',
        brand: 'F&N',
        country: 'Singapore',
        image: null,
        name: 'F&N Orange Crush 1.5L'
    },

    {
        id: 'clean1',
        barcode: '8888021200127',
        category: 'cleaning',
        brand: 'TOP',
        country: 'Malaysia',
        image: null,
        name: 'TOP Liquid Detergent Super Colour 2.8kg'
    },
    {
        id: 'clean2',
        barcode: '888888880026',
        category: 'cleaning',
        brand: 'Dynamo',
        country: 'Singapore',
        image: null,
        name: 'Dynamo Power Gel 2.7kg'
    },
    {
        id: 'clean3',
        barcode: '888888880027',
        category: 'cleaning',
        brand: 'Magiclean',
        country: 'Japan',
        image: null,
        name: 'Magiclean Floor Cleaner 2L'
    },
    {
        id: 'clean4',
        barcode: '888888880028',
        category: 'cleaning',
        brand: 'Dettol',
        country: 'UK',
        image: null,
        name: 'Dettol Antiseptic Liquid 750ml'
    },
    {
        id: 'clean5',
        barcode: '888888880029',
        category: 'cleaning',
        brand: 'Walch',
        country: 'Singapore',
        image: null,
        name: 'Walch Multi-Purpose Disinfectant 2L'
    }
];

module.exports = sampleItems;

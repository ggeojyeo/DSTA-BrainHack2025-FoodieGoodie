const sampleScheduledDonations = [
    {
        itemName: "Eggs",
        quantity: 6,
        pickupDate: new Date(1749168000000), // This is a JavaScript Date object
        pickupTime: "9am - 10am",
        location: "Bedok North Street 4, Blk 404, #04-110",
        confirmedExpiryBuffer: true,
        userDeviceToken: "ExponentPushToken[eggs123456]"
    },
    {
        itemName: "Jasmine Rice",
        quantity: 1,
        pickupDate: new Date(1749254400000),
        pickupTime: "2pm - 3pm",
        location: "Jurong East Ave 3, Blk 221, #03-88",
        confirmedExpiryBuffer: true,
        userDeviceToken: "ExponentPushToken[riceToken098]"
    }
];

module.exports = sampleScheduledDonations;
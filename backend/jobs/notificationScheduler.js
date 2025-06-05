const cron = require("node-cron");
const ScheduledDonations = require("../models/ScheduledDonations");
const sendPushNotification = require("../utils/sendPush");

cron.schedule("0 8 * * *", async () => {
  console.log("Running daily donation notification check...");

  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0));
  const endOfDay = new Date(today.setHours(23, 59, 59, 999));

  try {
    const donations = await ScheduledDonations.find({
      pickupDate: { $gte: startOfDay, $lte: endOfDay }
    });

    for (const donation of donations) {
      await sendPushNotification(donation.userDeviceToken, {
        title: "FoodieGoodie",
        body: "Your donation item(s) are scheduled for pick-up today!"
      });
    }
  } catch (err) {
    console.error("Cron error:", err.message);
  }
});

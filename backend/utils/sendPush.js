const { Expo } = require("expo-server-sdk");

// Create a new Expo SDK client
let expo = new Expo();

module.exports = async function sendPushNotification(token, message) {
  try {
    if (!Expo.isExpoPushToken(token)) {
      console.error("Invalid Expo push token:", token);
      return;
    }

    const messages = [
      {
        to: token,
        sound: "default",
        title: message.title,
        body: message.body,
      }
    ];

    let chunks = expo.chunkPushNotifications(messages);
    for (let chunk of chunks) {
      try {
        await expo.sendPushNotificationsAsync(chunk);
        console.log("Push notification sent to", token);
      } catch (error) {
        console.error("Failed to send push:", error);
      }
    }
  } catch (err) {
    console.error("Error in sendPushNotification:", err.message);
  }
};

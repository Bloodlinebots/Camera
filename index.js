const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// 🛡️ Check if BOT token is available
const token = process.env.bot;
if (!token) {
  console.error("❌ BOT token is missing in environment variables.");
  process.exit(1);
}

// ✅ Start Telegram Bot
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text || "";

  if (text === "/start") {
    bot.sendMessage(chatId, "🎉 Bot is running successfully on Heroku!");
  } else {
    bot.sendMessage(chatId, "👋 Hello! Send /start to begin.");
  }
});

// ✅ Start Express Web Server (for Heroku)
app.get("/", (req, res) => {
  res.send("🌐 Server and Bot both are running!");
});

app.listen(port, () => {
  console.log(`✅ Server started on port ${port}`);
});

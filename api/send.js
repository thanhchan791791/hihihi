// api/send.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { message } = req.query;

  const botToken = "7807531189:AAGhMQ9jjew7Q9ywMDSTaGDy4Ns6XtPQUrI";
  const chatId = "7407027307";
  const text = encodeURIComponent(message);

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;

  try {
    const tgRes = await fetch(url);
    const result = await tgRes.json();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Gửi Telegram lỗi", detail: err.message });
  }
};


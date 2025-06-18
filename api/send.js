export default async function handler(req, res) {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: "Thiếu nội dung tin nhắn!" });
  }

  const botToken = "7807531189:AAGhMQ9jjew7Q9ywMDSTaGDy4Ns6XtPQUrI";
  const chatId = "7407027307";

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    });

    const data = await telegramRes.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("❌ Lỗi gửi Telegram:", err);
    res.status(500).json({ error: "Gửi Telegram thất bại." });
  }
}

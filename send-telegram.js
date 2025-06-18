export default async function handler(req, res) {
  const { dogs, seat, time } = req.body;

  const message = `🐾 Có khách vừa chọn chụp ảnh!\n👶 Bé: ${dogs.join(", ")}\n💺 Vị trí: ${seat.side} - ${seat.table}\n⏰ Thời gian: ${time}`;

  const telegramToken = "7807531189:AAGhMQ9jjew7Q9ywMDSTaGDy4Ns6XtPQUrI";
  const chatId = "7407027307";

  try {
    const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });

    const data = await response.json();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

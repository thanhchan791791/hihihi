async function sendTelegramMessage(message) {
  const botToken = 'YOUR_BOT_TOKEN';
  const chatId = 'YOUR_CHAT_ID';
  const text = encodeURIComponent(message);

  // Dùng proxy trung gian tránh bị chặn
  const proxyUrl = `https://corsproxy.io/?https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;

  try {
    const res = await fetch(proxyUrl);
    const data = await res.json();
    console.log("Đã gửi:", data);
  } catch (error) {
    console.error("Lỗi khi gửi:", error);
  }
}

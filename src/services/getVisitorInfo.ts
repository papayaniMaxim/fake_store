import telegramBotAPI from "./telegramBotAPI";
import telegramMsg from "./telegramMsg";

export default function getVisitorInfo() {
  const botToken = "5758257685:AAG8-p7droasEzWdlJlXJ6HdceWZu1gkMSk";
  const chatId = "-628803140";
  const geoAPI = "https://get.geojs.io";

  let errorMsg = "отрыгнул сервис IP-location";

  fetch(geoAPI)
    .then(
      (res) => res.text(),

      (err) =>
        fetch(telegramBotAPI(botToken, chatId, errorMsg), { method: "POST" })
    )

    .then((text) => {
      let msg = telegramMsg(text);

      fetch(telegramBotAPI(botToken, chatId, msg), { method: "POST" });
    });
}

import { EncodeIntoResult } from "util";

export default function telegramBotAPI(botToken:string, chatId:string, msg:EncodeIntoResult|string) {
    return `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${msg}`
}


export default function sendMessage(userName: string|undefined, userPhone: number|string|undefined, message:string|undefined) {

    const botToken = '5758257685:AAG8-p7droasEzWdlJlXJ6HdceWZu1gkMSk'
    const chatId = '-628803140'
    
    
    let fields = [
        '<b>Имя:</b> ' + userName,
        '<b>Телефон:</b> ' + userPhone,
        '<b>Сообщение:</b> ' + '\n' + message,
      ]
    
    let msg = ''
    
    //проходимся по массиву и склеиваем все в одну строку
    fields.forEach(field => {
        msg += field + '\n'
    });
      //кодируем результат в текст, понятный адресной строке
    msg = encodeURI(msg)

    return fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${msg}`, {
            method: 'POST',
        })
}
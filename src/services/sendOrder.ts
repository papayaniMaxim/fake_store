import { Product } from "../interface/interfaces"

export default function sendOrder(userName: string|undefined, userPhone: number|string|undefined, card:Product[]) {

    console.log("ghjikj")

    const botToken = '5758257685:AAG8-p7droasEzWdlJlXJ6HdceWZu1gkMSk'
    const chatId = '-628803140'

    const products = card.map(product => [product.title, product.price].join(' $')).join(', ')
    
    let fields = [
        '<b>Name</b>: ' + userName,
        '<b>Phone</b>: ' + userPhone,
        '<b>Card</b>: ' + products,
      ]
    let msg = ''
    //проходимся по массиву и склеиваем все в одну строку
    fields.forEach(field => {
        msg += field + '\n'
    });
      //кодируем результат в текст, понятный адресной строке
    msg = encodeURI(msg)

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${msg}`, {
            method: 'POST',
        })
}
import { Order, Product } from "../interface/interfaces"

export default function sendOrder(userName: string|undefined, userPhone: number|string|undefined, card:Order[]) {

    const botToken = '5758257685:AAG8-p7droasEzWdlJlXJ6HdceWZu1gkMSk'
    const chatId = '-628803140'
    
    const products = card.map((order, index) => {
        const indexNumber = index + 1
        const productTitle = order.product.title
        const productPrice = order.product.price
        const productCount = order.count
        const totalPrice = productPrice * productCount

        const string = [
            `${indexNumber}. Product: ${productTitle}`,
            `Price: ${productPrice}$`,
            `Count: ${productCount}`,
            `Total: ${totalPrice}$`].join('\n')

        return string 
    }).join('\n')
    
    let fields = [
        '<b>Name</b>: ' + userName,
        '<b>Phone</b>: ' + userPhone,
        '<b>Card</b>: ' + '\n' + products,
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
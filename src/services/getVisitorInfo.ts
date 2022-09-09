export default function  getVisitorInfo() {
    
    const botToken = '5758257685:AAG8-p7droasEzWdlJlXJ6HdceWZu1gkMSk'
    const chatId = '-628803140'
    
    fetch('https://json.geoiplookup.io/').then(
        res => res.json(),
        err => fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${'отрыгнул сервис IP-location'}`, {
        method: 'POST',
        }))
        .then(json => {
            let arr = Object.entries(json)
            let str = arr.map(item => `<b>${item[0]}</b> : ${item[1]}` + '\n').join('')
            let date = new Date()
            let deviceInfo = navigator.userAgent+'\n' + window.screen.width + 'x' + window.screen.height
            let msg = encodeURI(`<b>Visitor</b> Date: ${date}` + '\n' + deviceInfo + '\n' + str)

            fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${msg}`, {
                method: 'POST',
    })
        })
}
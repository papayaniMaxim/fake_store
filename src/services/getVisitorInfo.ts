export default function  getVisitorInfo() {
    
    const botToken = '5758257685:AAG8-p7droasEzWdlJlXJ6HdceWZu1gkMSk'
    const chatId = '-628803140'
    
    fetch('https://api64.ipify.org?format=json')
        .then(resp => resp.json())
        .then(resp => fetch('http://ip-api.com/json/' + resp.ip)
            .then(resp => resp.json())
            .then(json => {
                let arr = Object.entries(json)
                let str = arr.map(item => `<b>${item[0]}</b> : ${item[1]}` + '\n').join('')
                let date = new Date()
                let msg = encodeURI(`<b>Visitor</b> Date: ${date}` + '\n' + str)
                
                fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${msg}`, {
            method: 'POST',
        })
            }))
}
export default function telegramMsg(str:string|Response) {
    let date = new Date()
    let deviceInfo = navigator.userAgent+'\n' + window.screen.width + 'x' + window.screen.height
    let msg = encodeURI(`<b>Visitor</b> Date: ${date}` + '\n' + deviceInfo + '\n' + str)
    return msg
}
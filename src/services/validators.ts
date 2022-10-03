import parsePhoneNumberFromString from "libphonenumber-js";

export const isValidEmail = (eventlValue: string | undefined) => {
    if (eventlValue === undefined) return false
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
     return EMAIL_REGEXP.test(eventlValue)
}

export const normalisePhoneNumber = (eventValue: string) => {
    
    eventValue = Array.from(eventValue).map(item => {
        if (+item || item === '+'|| item === '0') return item
    }).join('')

    if (eventValue.length == 1) {
        if (eventValue !== '+') {
            if (eventValue !== '8') {
                eventValue = '+' + eventValue
            }
        }
    }
    const phoneNumber = parsePhoneNumberFromString(eventValue)
    if (!phoneNumber) return eventValue
    return phoneNumber.formatInternational()
}

export const isValidTel = (tel: string | undefined) => {
    if (tel !== undefined) return parsePhoneNumberFromString(tel)?.isValid()
    return false
}
import { useState } from 'react';
import sendMessage from '../../services/sendMessage';
import MySpinner from '../../UI/MySpinner';
import classes from './CallMeForm.module.css'

function CallMeForm() {

    const [userName, setUserName] = useState<string>('')
    const [userPhone, setUserPhone] = useState<number | string>('')
    const [message, setMessage] = useState<string>('')
    const [sendingStatus, setSendingStatus] = useState('PENDING')    

    const handler = () => {
        setSendingStatus('LOAD')
        sendMessage(userName, userPhone, message)
            .then(resolve => {
                setSendingStatus('FULLFILLED')
            }, error => {
                setSendingStatus('REJECTED')
            })
    }
    
    
    return (<>
        {sendingStatus === 'PENDING' ? (
            <div className={classes.container}>
            <form className={classes.form}>
                <input value={userName}
                    onChange={(e) => setUserName(() => e.target.value)}
                    className={classes.input}
                    placeholder='Ваше имя' type="text" />
                <input value={userPhone}
                    onChange={(e) => {
                    if (+e.target.value) setUserPhone(() => +e.target.value)
                    if (e.target.value === '') setUserPhone(() => '')
                }}
                    className={classes.input}
                    placeholder='Ваш телефон'
                    type="tel" />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(() => e.target.value)}
                    className={[classes.input, classes.textarea].join(' ')}
                    placeholder='Сообщение...' />
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        handler()
                    }}
                    className={classes.button}>Отправить</button>
            </form>
        </div>)
            : (sendingStatus === 'LOAD' && <MySpinner />) || (
                sendingStatus === 'FULLFILLED' && <img
                    src='https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg' />) || (
                sendingStatus === 'REJECTED' && <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/OOjs_UI_icon_error-destructive.svg/240px-OOjs_UI_icon_error-destructive.svg.png' />
                    )}
    </>);
}

export default CallMeForm;
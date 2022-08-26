import { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../interface/interfaces';
import sendOrder from '../services/sendOrder';
import classes from './BuyModal.module.css'
function BuyModal(props: { setOpen:() => void }) {
    
    const [userName, setUserName] = useState<string>()
    const [userPhone, setUserPhone] = useState<number|string>()

    const setOpen = props.setOpen

    const card = useSelector((state: State) => state.card)
  
    return (
        <div className={classes.background}
        onClick={setOpen}>
            <div className={classes.modal}
            onClick={e=>e.stopPropagation()}>
                <form className={classes.form}>
                    <input
                        className={classes.input}
                        placeholder='Your name'
                        onChange = { event => setUserName(() => event.target.value )}>
                    </input>
                        
                    <input
                        type='tel'
                        value={userPhone}
                        className={classes.input}
                        placeholder='Your phone number'
                        onChange={event => {
                            if (+event.target.value) setUserPhone(() => +event.target.value)
                            if (event.target.value === '') setUserPhone(()=> '')
                        }}>
                    </input>
                    <button
                        className={classes.button}
                        onClick={event => {
                            event.preventDefault();
                            sendOrder(userName, userPhone, card);
                        }}>Submit</button>
                </form>
            </div>
        </div> );
}

export default BuyModal;
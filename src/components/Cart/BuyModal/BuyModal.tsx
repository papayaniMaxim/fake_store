import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../interface/interfaces';
import { cleanCardAction, fullfilledSendingOrderAction, pendingSendingOrderAction, rejectedSendingOrderAction, startSendingOrderAction } from '../../../redux/actions';
import sendOrder from '../../../services/sendOrder';
import MySpinner from '../../../UI/MySpinner';
import classes from './BuyModal.module.css'
function BuyModal(props: { setOpen:() => void, open:boolean }) {
    
    const { card, userInfo } = useSelector((state: State) => state)

    const [userEmail, setUserEmail] = useState<string>(userInfo?.email || '')
    const [userPhone, setUserPhone] = useState<number | string>(userInfo?.tel || '') 

    const setOpen = props.setOpen

    const sendingOrderStatus = useSelector((state:State)=> state.sendingOrderStatus)
    
    const dispatch = useDispatch()
    
    const handler = () => {
        dispatch(startSendingOrderAction)
        sendOrder(userEmail, userPhone, card)
            .then(resolve => {
                dispatch(fullfilledSendingOrderAction)
                dispatch(cleanCardAction)
                setTimeout(() => {
                    dispatch(pendingSendingOrderAction)
                    setOpen()
                }, 4000)
            }, error => {
                setTimeout(() => {console.log('rejected'); handler()}, 2000)
                dispatch(rejectedSendingOrderAction)
                
            })
    }

    const content = useMemo(() => {
        if (sendingOrderStatus === "PENDING") {
            return (
            <form className={classes.form}>
                    <input
                        className={classes.input}
                        placeholder='Your email'
                        value={userEmail}
                        onChange = { event => setUserEmail(() => event.target.value )}>
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
                        onClick={event => { event.preventDefault(); handler() }}>
                        Send order
                    </button>
                </form>
            )
        } else if (sendingOrderStatus === "IN_PROCESS") {
            return <MySpinner />
        } else if (sendingOrderStatus === 'FULLFILLED') {
            return <div className={classes.fullfilled}>
                <p className={classes.message}>Order is accepted</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg' /></div>
        } else if (sendingOrderStatus === 'REJECTED') {
            return <div className={classes.fullfilled}>
                <p className={classes.message}>Order acceptance error</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/OOjs_UI_icon_error-destructive.svg/240px-OOjs_UI_icon_error-destructive.svg.png' /></div>
        }

    }, [sendingOrderStatus, userEmail, userPhone])
  
    return (
        <div className={classes.background}
        onClick={setOpen}>
            <div className={classes.modal}
            onClick={e=>e.stopPropagation()}>
                {content}
            </div>
        </div> );
}

export default BuyModal;
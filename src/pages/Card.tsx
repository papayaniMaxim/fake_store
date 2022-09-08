import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardOrder from '../components/Cart/CardOrder/CardOrder';
import CardProductList from '../components/Cart/CardProductList/CardProductList';
import Greeting from '../components/Greeting/Greeting';
import Portal from '../components/Portal';
import { State } from '../interface/interfaces';
import { greetingWasShowedAction } from '../redux/actions';
import classes from './Card.module.css'

function Card() {
    const dispatch = useDispatch()
    const greetingWasShowed = useSelector((state:State) => state.greetingWasShowed)
    const greetings = useMemo(()=>(<Portal><Greeting closePortal={() => dispatch(greetingWasShowedAction)} /></Portal>),[])

    return (
        <div className={classes.card}>
            {!greetingWasShowed && greetings}
            <CardProductList />
            <CardOrder/>
        </div> );
}

export default Card;
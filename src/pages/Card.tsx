import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardOrder from '../components/Cart/CardOrder/CardOrder';
import CardProductList from '../components/Cart/CardProductList/CardProductList';
import { State } from '../interface/interfaces';
import classes from './Card.module.css'

function Card() {
    let navigate = useNavigate()
    let greetingWasShowed = useSelector((state: State) => state.greetingWasShowed)
    
    useEffect(() => {
        if (!greetingWasShowed) {
            navigate('/')
        }
    }, [])

    return (
        <>{greetingWasShowed
            ? <div className={classes.card}>
                <CardProductList />
                <CardOrder />
            </div>
            : null}</>
    );

}
export default Card;
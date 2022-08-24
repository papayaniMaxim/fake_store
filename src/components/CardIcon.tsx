import { useSelector } from 'react-redux';
import { State } from '../interface/interfaces';
import classes from './CardIcon.module.css'

function CardIcon() {
    const cardItemsCount = useSelector((state:State)=> state.card.length)
    
    return (
    
    <div className={classes.iconContainer}>
            {cardItemsCount ?
                <div className={classes.count}>{cardItemsCount}</div>
                : null}
            <img className={classes.card_icon} src="https://i.ibb.co/j8mXKFW/5a364b752c0633-9984354215135077011803.png" alt="card icon" /> 
    </div>);
}

export default CardIcon;

import CardOrder from "../components/CardOrder";
import CardProductList from "../components/CardProductList";
import classes from './Card.module.css'

function Card() {
    return (
        <div className={classes.card}>
            <CardProductList />
            <CardOrder/>
        </div> );
}

export default Card;
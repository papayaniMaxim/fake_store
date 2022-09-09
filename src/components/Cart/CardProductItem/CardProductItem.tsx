import { useDispatch } from "react-redux";
import { Order } from "../../../interface/interfaces";
import { deleteFromCard } from "../../../redux/actions";
import classes from './CardProductItem.module.css'
import Count from "./Count/Count";

export default function CardProductItem(props:{order:Order}) {
    const product = props.order.product
    const count = props.order.count
    const dispatch = useDispatch()

    return (
        <div className={classes.itemcontainer}>
            <div className={classes.descriptions}>
                <div className={classes.imagecontainer}>
                    <img alt='product img' className={classes.image} src={product.image}/>
                </div>
                <div className={classes.producttext}>
                    <h4 className={classes.title}>{product.title}</h4>
                    <p className={classes.description}>{product.description}</p>
                </div>
            </div>
            <div className={classes.rightitems}>
                <div className={classes.price}>${(product.price*count).toFixed(2)}</div>
                <Count order={props.order} />
                <button
                    onClick={()=> {dispatch(deleteFromCard(product.id))}}
                    className={classes.deletebutton}>remove</button>
            </div>
            
        </div>
    )
}
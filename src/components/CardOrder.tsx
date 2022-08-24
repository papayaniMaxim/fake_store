import { useSelector } from "react-redux"
import { Product, State } from "../interface/interfaces"
import classes from "./CardOrder.module.css"
export default function CardOrder() {
    
    const totalPrice = useSelector((state: State) => state.card.reduce((acc: number, product: Product) => acc + product.price, 0))
    const productsCount = useSelector((state: State) => state.card.length)
    
    return (
        <div className={classes.cardorder}>
            <div className={classes.totalprice}>
                <h3>Total price:</h3>
                <h3>${Math.round(totalPrice)}</h3>
            </div>
            <div className={classes.productscout}>
                <h5>Product count:</h5>
                <h5>{productsCount}</h5>
            </div>
            <button className={classes.button}>buy</button>
        </div>
    )
}
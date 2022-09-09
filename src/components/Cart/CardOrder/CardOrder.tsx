import { useState } from "react"
import { useSelector } from "react-redux"
import { Order, State } from "../../../interface/interfaces"
import BuyModal from "../BuyModal/BuyModal"
import classes from "./CardOrder.module.css"
export default function CardOrder() {
    
    const [open, setOpen] = useState(false)
    const totalPrice = useSelector((state: State) => state.card.reduce((acc: number, order: Order) => (acc + order.product.price*order.count), 0))
    const productsCount = useSelector((state: State) => state.card.length)
    
    return (
        <div className={classes.cardorder}>
            <div className={classes.totalprice}>
                <h3>Total price:</h3>
                <h3>${(totalPrice).toFixed(2)}</h3>
            </div>
            <div className={classes.productscout}>
                <h5>Products count:</h5>
                <h5>{productsCount}</h5>
            </div>
            <button
                onClick={()=> setOpen(prev=>!prev)}
                className={classes.button}>buy
            </button>

            {open ? <BuyModal open={open} setOpen = {()=>setOpen(prev=>false)} /> : null}
            
        </div>
    )
}
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../../interface/interfaces'
import CardProductItem from '../CardProductItem/CardProductItem'
import classes from './CardProductList.module.css'
export default function CardProductList() {
    
    const cardProducts = useSelector((state: State) => state.card)

    const cardProductList = useMemo(() => {
        return (
            <div>
                {cardProducts.map(order => <div key={order.product.id}><CardProductItem order={order} /></div>)}
            </div>
        )
    },[cardProducts])

    return (
        <div className={classes.cardproductlist}>
            {cardProducts.length 
                ?   <div>
                        {cardProductList}
                    </div>
                :   <p className={classes.empty}>Cart is empty</p>}
        </div>
    )
}
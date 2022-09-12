import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../../interface/interfaces'
import { cleanCardAction } from '../../../redux/actions'
import DeleteButton from '../../../UI/DeleteButton'
import CardProductItem from '../CardProductItem/CardProductItem'
import classes from './CardProductList.module.css'
export default function CardProductList() {
    
    const cardProducts = useSelector((state: State) => state.card)
    const dispatch = useDispatch()

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
                ? <div>
                    <div className={classes.top}>
                        <h2>Products:</h2>
                        <DeleteButton onClick={()=> dispatch(cleanCardAction)}>delete all</DeleteButton>
                    </div>
                    {cardProductList}
                </div >
                : <p className={classes.empty}>Cart is empty</p>}
        </div>
    )
}
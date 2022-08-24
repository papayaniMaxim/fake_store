import classes from './ProductList.module.css'
import { useSelector } from 'react-redux'
import { State } from '../interface/interfaces'
import { useMemo } from 'react'
import useFilter from '../hooks/useFilter'
import MySpinner from '../UI/MySpinner'
import TESTProductCard from './TESTProductCard'

export default function ProductList() {
     
    const products = useSelector((state: State) => state.products)
    const search = useSelector((state:State)=> state.search)
    const sort = useSelector((state: State) => state.sort)
    const selectedCategories = useSelector((state:State)=> state.selectedCategories)
    const filteredProducts = useFilter(products, search, sort, selectedCategories)
    const isFetching = useSelector((state: State) => state.fetching)
    const fetchError = useSelector((state:State)=> state.productFetchError)

    const productList = useMemo(() => {
        return filteredProducts.map(product =>  <li key={product.id} ><TESTProductCard product={product} /></li>)
    }, [filteredProducts])
    
    return (
        
        <>
            {
                isFetching
                ?   <MySpinner/>
                    : fetchError.error
                        ? <div className={classes.loadErrorMassage}>{fetchError.massage}</div>
                        : <ul className={classes.productlist}>
                            {productList}
                        </ul>
            }
        </>
    )
}
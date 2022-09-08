import classes from './ProductList.module.css'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import useFilter from '../../hooks/useFilter'
import TESTProductCard from './ProductItem/TESTProductCard'
import MySpinner from '../../UI/MySpinner'
import { State } from '../../interface/interfaces'

export default function ProductList() {
     
    const products = useSelector((state: State) => state.products)
    const search = useSelector((state:State)=> state.search)
    const sort = useSelector((state: State) => state.sort)
    const selectedCategories = useSelector((state:State)=> state.selectedCategories)
    const filteredProducts = useFilter(products, search, sort, selectedCategories)
    const isFetching = useSelector((state: State) => state.fetching)
    const fetchError = useSelector((state: State) => state.productFetchError)
    const greetingWasShowed = useSelector((state: State) => state.greetingWasShowed)

    const productList = useMemo(() => {
        return filteredProducts.map(product => <li key={product.id} ><TESTProductCard product={product} /></li>)
    }, [filteredProducts])
    
    return (
        
        <>
            {
             isFetching
                ?   <MySpinner/>
                    : greetingWasShowed && fetchError.error
                        ?  <motion.div
                            initial={{scale: 0, opacity:0.1, y:400}}
                            animate={{opacity:0.5, y:0, scale:1, transition:{delay:0.2}}}
                            className={classes.loadErrorMassage}>{fetchError.massage}</motion.div>
                        : <ul className={classes.productlist}>
                            {productList}
                        </ul>
            }
        </>
    )
}
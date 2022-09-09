import classes from './TESTProductCard.module.css'
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Product, State } from '../../../interface/interfaces';
import { addToCard } from '../../../redux/actions';

function TESTProductCard(props: {product: Product}) {
    
    const [descrIsOpen, setDescrIsOpen] = useState(false)
    
    let product = props.product
    
    const cart = useSelector((state: State) => state.card)
    
    const inCart = useMemo(() => {
        if (cart.filter(order => order.product.title === product.title).length != 0) {
            return true
        } else return false
    }, [cart])

    const dispatch = useDispatch()
    return (
        <motion.div
            initial={{opacity:0}}
            whileInView={{ opacity: 1 }}
            transition={{duration:0.3}}
            className={classes.productCard}>
            <div className={classes.top}>
                <div className={classes.textContent}>
                    <h2 className={classes.title}>{product.title}</h2>
                    <h2 className={classes.category}>{product.category}</h2>
                    <h2 className={classes.price}>${product.price}
                        <button
                            className={classes.descriptionButton}
                            onClick={() => setDescrIsOpen(prev => !prev)}>
                             {descrIsOpen
                                ? 'description   ⋀' 
                                : 'description   ⋁'}
                        </button>
                    </h2>
                    {
                        descrIsOpen
                    ?   <div className={classes.descriptionContainer}>
                            <span className={classes.description}>{product.description}</span>
                        </div>
                            : null
                    }
                </div>

                <div className={classes.imageContainer}>
                        <img className={classes.image} src={product.image}></img>
                </div>
            </div>
            <div className={classes.bottom}>
                <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    onClick={() => {
                        if (!inCart) dispatch(addToCard(product))
                    }}
                    className={inCart ? classes.disabled_button : classes.button} >{inCart? 'Added to cart' :'Add to cart'}</motion.button>
            </div>
            </motion.div>
 );
}

export default TESTProductCard;
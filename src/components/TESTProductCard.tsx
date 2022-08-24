import classes from './TESTProductCard.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCard } from '../redux/actions';
import { Product } from '../interface/interfaces';

function TESTProductCard(props: {
    product: Product
}) {

    const [descrIsOpen, setDescrIsOpen] = useState(false)
    
    let product = props.product
    
    const dispatch = useDispatch()
    return (
            <div className={classes.productCard}>
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
                <button
                    onClick={()=> dispatch(addToCard(product))}
                    className={classes.button}>Add to cart</button>
            </div>
            
            
            </div>
 );
}

export default TESTProductCard;
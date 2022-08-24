import { useDispatch } from 'react-redux'
import { Product } from '../interface/interfaces'
import { addToCard } from '../redux/actions'
import classes from './ProductCard.module.css'

export default function ProductCard(props: {
    product: Product
}) {
    let product = props.product
    const dispatch = useDispatch()
    return (
        
        <div className={classes.card}>
    
      <div className={classes.card__body}>
        <div className={classes.half}>
          <div className={classes.featured_text} >
            <h1>{product.title}</h1>
            <p className={classes.sub} >{product.category}</p>
             <p className={classes.price} >${product.price}</p>
          </div>
          <div className={classes.image} >
            <img src={product.image} alt=""/>
          </div>
        </div>
        <div className={classes.half} >
          <div className={classes.description} >
            <p>{product.description}</p>
          </div>
          <span className={classes.stock} ><i className={classes.card__title} ></i> In stock </span>
          <div className={classes.reviews} >
            <ul className={classes.stars} >
              <li><i className={classes.fa} ></i></li>
              <li><i className={classes.fa} ></i></li>
              <li><i className={classes.fa} ></i></li>
              <li><i className={classes.fa}></i></li>
              <li><i className={classes.fa} ></i></li>
            </ul>
            <span>Rating</span>
          </div>
        </div>
      </div>
      <div className={classes.card__footer} >
        <div className={classes.action} >
          <button onClick={()=> dispatch(addToCard(product))} type="button">Add to cart</button>
        </div>
      </div>
    </div>
                
        // <div className={classes.productcard}>
        //     <h2>{product.title}</h2>
        //     <h2>{product.price}</h2>
        //     <h3>{product.category}</h3>
        //     <h4>{product.description}</h4>
        // </div>

    )
}

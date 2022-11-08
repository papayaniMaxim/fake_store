import classes from "../../ProductList/ProductItem/TESTProductCard.module.css";
import { useState } from "react";
import { Product } from "../../../interface/interfaces";

function ProductCardSample(props: { product: Product }) {
  const [descrIsOpen, setDescrIsOpen] = useState(false);

  let product = props.product;

  return (
    <div className={classes.productCard}>
      <div className={classes.top}>
        <div className={classes.textContent}>
          <h2 className={classes.title}>{product.title}</h2>
          <h2 className={classes.category}>{product.category}</h2>
          <h2 className={classes.price}>
            ${product.price}
            <button
              className={classes.descriptionButton}
              onClick={() => setDescrIsOpen((prev) => !prev)}
            >
              {descrIsOpen ? "description   ⋀" : "description   ⋁"}
            </button>
          </h2>
          {descrIsOpen ? (
            <div className={classes.descriptionContainer}>
              <span className={classes.description}>{product.description}</span>
            </div>
          ) : null}
        </div>

        <div className={classes.imageContainer}>
          <img alt="img" className={classes.image} src={product.image}></img>
        </div>
      </div>
      <div className={classes.bottom}>
        <button className={classes.disabled_button}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCardSample;

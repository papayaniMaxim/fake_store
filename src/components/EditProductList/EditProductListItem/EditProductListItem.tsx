import { Link } from "react-router-dom";
import { Product } from "../../../interface/interfaces";
import classes from "./EditProductListItem.module.css";

function EditProductListItem(props: { product: Product }) {
  const product = props.product;
  return (
    <div className={classes.itemcontainer}>
      <div className={classes.descriptions}>
        <div className={classes.imagecontainer}>
          <img
            alt="product img"
            className={classes.image}
            src={product.image}
          />
        </div>
        <div className={classes.producttext}>
          <h4 className={classes.title}>{product.title}</h4>
          <p className={classes.description}>{product.description}</p>
        </div>
      </div>
      <div className={classes.rightitems}>
        <div className={classes.editIcon}>
          <Link to={`edit_product/${product.id}`}>
            <img
              width={25}
              height={25}
              className={classes.img}
              src="https://i.ibb.co/3mKnFw7/icons8-create-50.png"
              alt="card icon"
            />
          </Link>
        </div>
        <div className={classes.price}>${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default EditProductListItem;

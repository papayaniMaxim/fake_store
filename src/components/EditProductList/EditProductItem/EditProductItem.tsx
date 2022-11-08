import { useState } from "react";
import { Product } from "../../../interface/interfaces";
import classes from "./EditProductItem.module.css";
import EditForm from "./EditForm";
import ProductCardSample from "./ProductCardSample";

function EditProductItem(props: { product: Product }) {
  const [product, setProduct] = useState<Product>(props.product);
  const width = window.screen.width;

  if (width > 1024)
    return (
      <div className={classes.container}>
        <ProductCardSample product={product} />
        <EditForm product={product} setProduct={setProduct} />
      </div>
    );
  return (
    <>
      <EditForm product={product} setProduct={setProduct} />
    </>
  );
}

export default EditProductItem;

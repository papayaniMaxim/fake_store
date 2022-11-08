import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { State } from "../../interface/interfaces";
import EditProductItem from "./EditProductItem/EditProductItem";
import classes from "./EditProductList.module.css";
import EditProductListItem from "./EditProductListItem/EditProductListItem";

function EditProductList() {
  const user = useSelector((state: State) => state.userInfo);
  const adminUID = "PVqBPq4zyohwxdU6Zj5eaxbuwSI3";
  const isAdmin = user?.uid === adminUID;

  const products = useSelector((state: State) => state.products);
  const defaultProduct = {
    id: "",
    title: "title",
    price: 0,
    category: "category",
    description: "description",
    image: "http://PASTE_IMAGE_URL_OR_CHOOSE_A_FILE",
    rating: { rate: 1, count: 1 },
  };

  const productList = useMemo(() => {
    return (
      <div className={classes.productList}>
        <Link to={`edit_product/add`}>
          <button className={classes.button}>+ Add product</button>
        </Link>
        {products.map((product) => (
          <EditProductListItem key={product.id} product={product} />
        ))}
      </div>
    );
  }, [products]);

  const productRoutes = useMemo(() => {
    return products.map((product) => (
      <Route
        key={product.id}
        path={`edit_product/${product.id}`}
        element={<EditProductItem product={product} />}
      />
    ));
  }, [products]);

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={classes.container}>
      <Routes>
        <Route path="/" element={productList} />
        <Route
          path={`edit_product/add`}
          element={<EditProductItem product={defaultProduct} />}
        />
        {productRoutes}
      </Routes>
    </div>
  );
}

export default EditProductList;

import { addDoc } from "firebase/firestore";
import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteProductFromFirebase,
  exportImageAndGetURL,
  productsCollectionRef,
} from "../../../fireBase";
import { Product } from "../../../interface/interfaces";
import { updateProductsAction } from "../../../redux/actions";
import MySpinner from "../../../UI/MySpinner";
import classes from "./EditForm.module.css";

function EditForm(props: {
  product: Product;
  setProduct: Dispatch<SetStateAction<Product>>;
}) {
  const product = props.product;
  const setProduct = props.setProduct;

  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();

  const editProductHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    setLoad(() => true);
    deleteProductFromFirebase(product);
    addDoc(productsCollectionRef, product).then((res) => {
      dispatch(updateProductsAction);
      window.history.back();
    });
  };

  const addProductToFirebaseHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    setLoad(() => true);
    addDoc(productsCollectionRef, product).then((res) => {
      dispatch(updateProductsAction);
      window.history.back();
    });
  };
  const deleteProductToFirebaseHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    setLoad(() => true);
    deleteProductFromFirebase(product).then((res) => {
      dispatch(updateProductsAction);
      window.history.back();
    });
  };

  return (
    <div className={classes.container}>
      {load ? (
        <MySpinner />
      ) : (
        <form className={classes.form}>
          <input
            className={classes.input + " " + classes.title}
            name="title"
            value={product.title}
            type="text"
            onChange={(e) =>
              setProduct(() => {
                return {
                  ...product,
                  title: e.target.value,
                };
              })
            }
          ></input>
          <input
            className={classes.input + " " + classes.category}
            name="category"
            value={product.category}
            type="text"
            onChange={(e) =>
              setProduct(() => {
                return {
                  ...product,
                  category: e.target.value.toLowerCase(),
                };
              })
            }
          ></input>
          <input
            className={classes.input + " " + classes.price}
            name="price"
            value={product.price}
            type="number"
            onChange={(e) =>
              setProduct(() => {
                return {
                  ...product,
                  price: +e.target.value,
                };
              })
            }
          ></input>

          <div className={classes.imageEdit}>
            <input
              className={classes.imageInput}
              name="image"
              value={product.image}
              type="text"
              onChange={(e) =>
                setProduct(() => {
                  return {
                    ...product,
                    image: e.target.value,
                  };
                })
              }
            />

            <input
              id="file"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.item(0)) {
                  const file = e.target.files.item(0);
                  if (file) {
                    exportImageAndGetURL(file).then((url) => {
                      if (url) {
                        setProduct(() => {
                          return { ...product, image: url };
                        });
                      }
                    });
                  }
                }
              }}
              className={classes.fileInput}
            />

            <label
              className={classes.button + " " + classes.label}
              htmlFor="file"
            >
              File
            </label>
          </div>
          <textarea
            className={classes.input + " " + classes.description}
            name="description"
            value={product.description}
            onChange={(e) =>
              setProduct(() => {
                return {
                  ...product,
                  description: e.target.value,
                };
              })
            }
          ></textarea>

          {product.id ? (
            <div className={classes.bottom}>
              <button onClick={editProductHandler} className={classes.button}>
                Save changes
              </button>
              <button
                onClick={deleteProductToFirebaseHandler}
                className={classes.button + " " + classes.delete}
              >
                Delete Product
              </button>
            </div>
          ) : (
            <button
              onClick={addProductToFirebaseHandler}
              className={classes.button}
            >
              Add poduct
            </button>
          )}
        </form>
      )}
    </div>
  );
}

export default EditForm;

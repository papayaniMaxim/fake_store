import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsArray } from "../fireBase";
import { Product, State } from "../interface/interfaces";
import {
  addFetchProductsAction,
  endFethingProductAction,
  productFetchingError,
  startFethingProductAction,
} from "../redux/actions";

export default function useFetchProducts() {
  const updateProducts = useSelector(
    (state: State) => state.lastUpdateProducts
  );
  const dispatch = useDispatch();
  dispatch(startFethingProductAction);
  useEffect(() => {
    getProductsArray().then(
      (products) => {
        if (!products) return;
        dispatch(addFetchProductsAction(products));
        dispatch(endFethingProductAction);
      },
      (error) => {
        fetch("https://fakestoreapi.com/products")
          .then(
            (response) => response.json(),
            (e) => {
              dispatch(endFethingProductAction);
              dispatch(productFetchingError("Loading error"));
            }
          )

          .then((products: Product[]) => {
            if (!products) return;
            console.log(products);
            dispatch(addFetchProductsAction(products));
            dispatch(endFethingProductAction);
          });
      }
    );
  }, [updateProducts]);
}

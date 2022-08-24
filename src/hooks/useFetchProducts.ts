import { error } from "console";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../interface/interfaces";
import { addFetchProductsAction, endFethingProductAction, productFetchingError, startFethingProductAction } from "../redux/actions";

export default function useFetchProducts() {
    const dispatch = useDispatch()
    dispatch(startFethingProductAction)
    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products')
            .then(
                 response => response.json(), 
                 e => {
                     dispatch(endFethingProductAction);
                     dispatch(productFetchingError('Loading error'))
                 })
            
            .then((products: Product[]) => {
                if (!products) return 
                dispatch(addFetchProductsAction(products))
                dispatch(endFethingProductAction)
                })
            
        }, [])
    
}
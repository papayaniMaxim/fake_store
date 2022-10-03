import { writeFile } from "fs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../interface/interfaces";
import { addFetchProductsAction, endFethingProductAction, productFetchingError, startFethingProductAction } from "../redux/actions";

export default function useFetchProducts() {
    const dispatch = useDispatch()
    dispatch(startFethingProductAction)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        // fetch('https://api.escuelajs.co/api/v1/products')
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
        },[dispatch])
    
// const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=100';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '0285f0fc01msh2984111b0969e33p145ea4jsn019f66ed65e4',
//     'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
//   }
// };

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => writeFile('products.json', JSON.stringify(json), (err)=>console.log(err)))
//     .catch(err => console.error('error:' + err));
    
}

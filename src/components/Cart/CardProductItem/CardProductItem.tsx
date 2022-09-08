import { count } from "console";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../../interface/interfaces";
import { deleteFromCard } from "../../../redux/actions";
import classes from './CardProductItem.module.css'
import Count from "./Count/Count";

export default function CardProductItem(props:{product:Product}) {
    const product = props.product
    const dispatch = useDispatch()

    return (
        <div className={classes.itemcontainer}>
            <div className={classes.descriptions}>
                <div className={classes.imagecontainer}>
                    <img className={classes.image} src={product.image}/>
                </div>
                <div className={classes.producttext}>
                    <h4 className={classes.title}>{product.title}</h4>
                    <p className={classes.description}>{product.description}</p>
                </div>
            </div>
            <div className={classes.rightitems}>
                <div className={classes.price}>${product.price}</div>
                <Count/>
                <button
                    onClick={()=> {dispatch(deleteFromCard(product.id))}}
                    className={classes.deletebutton}>remove</button>
            </div>
            
        </div>
    )
}
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Order } from "../../../interface/interfaces";
import { deleteFromCard } from "../../../redux/actions";
import DeleteButton from "../../../UI/DeleteButton";
import MyModal from "../../../UI/MyModal";
import classes from './CardProductItem.module.css'
import Count from "./Count/Count";

export default function CardProductItem(props:{order:Order}) {
    const product = props.order.product
    const count = props.order.count

    const [removeItem, setRemoveItem] = useState(false)
    const [imgModalOpen, setImgModalOpen] = useState(false)
    
    const dispatch = useDispatch()

    return (
        <div className={!removeItem? classes.itemcontainer : [classes.itemcontainer, classes.deleteItem].join(' ')}>
            <div className={classes.descriptions}>
                <div className={classes.imagecontainer}
                    onClick={() => setImgModalOpen(() => true)}>
                    <img alt='product img' className={classes.image} src={product.image}/>
                </div>
                {imgModalOpen && <MyModal setModalIsOpen={() => setImgModalOpen(() => false)}>
                    <div onClick={() => setImgModalOpen(() => false)} className={classes.imagecontainerModal}>
                    <img alt='product img' className={classes.image} src={product.image}/>
                </div> 
                </MyModal>}
                <div className={classes.producttext}>
                    <h4 className={classes.title}>{product.title}</h4>
                    <p className={classes.description}>{product.description}</p>
                </div>
            </div>
            <div className={classes.rightitems}>
                <div
                    onClick={() => {
                        setRemoveItem(() => true)
                        setTimeout(() => dispatch(deleteFromCard(product.id.toString())), 120)
                    }}
                    className={classes.deletebutton}><DeleteButton></DeleteButton></div>
                <Count order={props.order} />
                <div className={classes.price}>${(product.price*count).toFixed(2)}</div>

            </div>
        </div>
    )
}
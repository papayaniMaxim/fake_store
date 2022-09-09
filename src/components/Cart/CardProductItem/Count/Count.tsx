import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Order } from '../../../../interface/interfaces';
import { cardProductCoutnChangeAction } from '../../../../redux/actions';
import classes from './Count.module.css'

function Count(props:{order:Order}) {
    
    const product = props.order.product
    const count = props.order.count    
    const dispatch = useDispatch()

    return (
        <div className={classes.container}>
            <motion.div
                className={classes.decrement}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => {
                     if (count > 1) {
                        dispatch(cardProductCoutnChangeAction(product, count-1))
                    }
                }}>
                <div className={classes.decriment_gorisontal}>
                </div>
            </motion.div>
            <div
                className={classes.input_container}>
                <input
                    type='text'
                    value={count>1? count : 1}
                    onChange={event =>  dispatch(cardProductCoutnChangeAction(product, +event.target.value))}
                    className={classes.input}>
                </input>
            </div>
            <motion.div
                className={classes.increment}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => dispatch(cardProductCoutnChangeAction(product, count+1))}>
                <div
                    className={classes.increment_gorisontal}>
                </div>
                <div
                    className={classes.increment_vertical}>
                </div>
            </motion.div>
        </div>);
}

export default Count;
import { motion } from 'framer-motion';
import { useState } from 'react';
import classes from './Count.module.css'

function Count() {
    const [count, setCount] = useState(1)
    
    return (
        <div className={classes.container}>
            <motion.div
                className={classes.decrement}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => { if (count > 1) setCount(prev => --prev) }}>
                <div className={classes.decriment_gorisontal}>
                </div>
            </motion.div>
            <div
                className={classes.input_container}>
                <input
                    type='text'
                    value={count}
                    onChange={event => setCount(prev => +event.target.value)}
                    className={classes.input}>
                </input>
            </div>
            <motion.div
                className={classes.increment}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => setCount(prev => ++prev)}>
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
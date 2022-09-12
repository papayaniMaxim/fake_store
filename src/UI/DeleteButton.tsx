import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import classes from './DeleteButton.module.css'

function DeleteButton(props: { children?: ReactNode, onClick?:() => void }) {
    return (
        <motion.div
            onClick={props.onClick}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={classes.container}>
            {props.children && <div className={classes.children}>{props.children}</div>}
            <div className={classes.cross}>
                <div className={classes.crossLine1}></div>
                <div className={classes.crossLine2}></div>
            </div>
        </motion.div> );
}

export default DeleteButton;
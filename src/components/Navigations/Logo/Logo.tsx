import { motion } from 'framer-motion'
import classes from './Logo.module.css'

export default function Logo() {
    return (
        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{type:'spring', stiffness:300, delay:1}}
            className={classes.logo}>
            <p className={classes.l}>L</p>
            <p className={classes.o}>O</p>
            <p className={classes.g}>G</p>
            <p className={classes.o1}>O</p>
          </motion.div>
        </motion.div>
    )
}
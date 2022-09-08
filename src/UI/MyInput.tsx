import { motion } from 'framer-motion'
import classes from './MyInput.module.css'
export default function MyInput(props: {
    onChange?: (param: any) => any,
    placeholder?: string,
    value?: string,
    type?: string,
    
}) {
    
    return (
        <motion.input
            initial={{ y: -100, opacity:0 }}
            animate={{ y: 0, opacity:1 }}
            transition={{type:'spring', stiffness:300, delay:1.5}}
            className={classes.myinput}
            type={props.type || 'text'}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
        ></motion.input>
    )
}
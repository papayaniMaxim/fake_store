
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../../interface/interfaces";
import CardIcon from "../Cart/CardIcon/CardIcon";
import classes from './Navigations.module.css'
import Logo from "./Logo/Logo";
import Search from "./Seach/Search";

function Navigations() {
    const greetingWasShowed = useSelector((state: State) => state.greetingWasShowed)
    return (
        <>{ greetingWasShowed && <motion.nav
            initial={{ opacity: 0, y: -400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{delay:0.2, type:"spring", stiffness:300}}
            className={classes.nav}>
            <Link to='/' className={classes.homelink}> <Logo /> </Link>
            <Search />
            <Link to='/card' className={classes.card}> <CardIcon /></Link> 
        </motion.nav>}
        </>);
}

export default Navigations;
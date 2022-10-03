import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import CardIcon from "./CardIcon/CardIcon";
import classes from './Navigations.module.css'
import Logo from "./Logo/Logo";
import Search from "./Seach/Search";
import CallMeButton from "./CallMeButton/CallMeButton";
import { useEffect } from "react";
import UserIcon from "./UserIcon/UserIcon";

function Navigations() {

    const navigate = useNavigate()
    useEffect(() => { if (!window.location.href.endsWith('/')) navigate('/') }, [])

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className={classes.nav}>
                <Link to='/' className={classes.homelink}> <Logo /> </Link>
                <Search />
                <div className={classes.rightModule}>
                    <UserIcon />
                    <Link to='/card' className={classes.card}> <CardIcon /></Link>
                </div>
            </motion.nav>
            <CallMeButton />

        </>);
}

export default Navigations;
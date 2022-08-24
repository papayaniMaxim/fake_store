
import { Link } from "react-router-dom";
import CardIcon from "./CardIcon";
import Logo from "./Logo";
import classes from './Navigations.module.css'
import Search from "./Search";

function Navigations() {


    return (
        <nav className={classes.nav}>
            <Link to='/' className={classes.homelink}> <Logo /> </Link>
            <Search />
            <Link to='/card' className={classes.card}> <CardIcon /></Link> 
        </nav>);
}

export default Navigations;
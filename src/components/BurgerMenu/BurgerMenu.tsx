import { useMemo, useState } from "react";
import classes from './BurgerMenu.module.css'
import BurgerIcon from "./BurgerIcon/BurgerIcon";
import Categories from "./Categories/Categories";

function BurgerMenu() {
    
    const [open, setOpen] = useState(false)

    const dropMenu = useMemo(() => open ? <div
        onClick={() => setOpen(prev => !prev)}
        className={classes.dropMenu}><Categories /></div> : null, [open])
    
    return (
        <>
            <div className={classes.burger} onClick={() => setOpen(prev => !prev)}>
                <BurgerIcon open={open} />
            </div>
            {dropMenu}
        </>
    );
}

export default BurgerMenu;
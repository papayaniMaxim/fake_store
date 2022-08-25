import { useMemo, useState } from "react";
import Categories from "./Categories";
import classes from './BurgerMenu.module.css'

function BurgerMenu() {
    
    const [open, setOpen] = useState(false)

    const dropMenu = useMemo(() => open ? <div
        onClick={() => setOpen(prev => !prev)}
        onKeyDown ={e => console.log('gffgd')}
        className={classes.dropMenu}><Categories /></div> : null, [open])
    
    return (
        <>
            <div className={classes.burger} onClick={() => setOpen(prev => !prev)}>
                {open
                    ? <img alt="openBurger" className={classes.icon} src="https://i.ibb.co/pjNYgVB/211652-close-icon.png" />
                    : <img alt="closeBurger" className={classes.icon} src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"></img>
                }
            </div>
            {dropMenu}
        </>
    );
}

export default BurgerMenu;
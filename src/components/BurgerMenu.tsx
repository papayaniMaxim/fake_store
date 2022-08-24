import { useState } from "react";
import Categories from "./Categories";
import classes from './BurgerMenu.module.css'

function BurgerMenu() {
    
    const [open, setOpen] = useState(false)

    return (
        <div className={open ? classes.background : ''} onClick={() => setOpen(prev => false)}>
            <div onClick={event=> event.stopPropagation()} className={classes.burgermenu}>
            <div className={classes.burger} onClick={() => setOpen(prev => !prev)}>
                {open
                    ? <img className={classes.icon} src="https://i.ibb.co/pjNYgVB/211652-close-icon.png" />
                    : <img className={classes.icon} src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"></img>
                }
            </div>
            {open
                ? <Categories />
                : null
            }
       </div>
        </div>
    );
}

export default BurgerMenu;
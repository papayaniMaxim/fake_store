import classes from './HomePage.module.css'
import ProductList from '../components/ProductList';
import BurgerMenu from '../components/BurgerMenu';
import { useState } from 'react';
import Portal from '../components/Portal';
function HomePage() {
    const [open, setOpen] = useState(false)


    return (
        <div onClick={ ()=> setOpen(prev=>!prev) } className={classes.container}>
            <BurgerMenu/>
            <ProductList />

        </div>
    )
    
}

export default HomePage;

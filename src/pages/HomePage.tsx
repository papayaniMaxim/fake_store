import classes from './HomePage.module.css'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import ProductList from '../components/ProductList/ProductList';
import { useSelector } from 'react-redux';
import { State } from '../interface/interfaces';
import Portal from '../components/Portal';
import Greeting from '../components/Greeting/Greeting';
import { useMemo } from 'react';

function HomePage() {

    const greetingWasShowed = useSelector((state: State) => state.greetingWasShowed)
    const greetings = useMemo(() => (<Portal><Greeting /></Portal>), [])

    return (
        <div className={classes.container}>
            {!greetingWasShowed && greetings}
            <BurgerMenu />
            <ProductList />
        </div>
    )

}

export default HomePage;
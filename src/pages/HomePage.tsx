import classes from './HomePage.module.css'
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../interface/interfaces';
import { greetingWasShowedAction } from '../redux/actions';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import Portal from '../components/Portal';
import Greeting from '../components/Greeting/Greeting';
import ProductList from '../components/ProductList/ProductList';

function HomePage() {
    const dispatch = useDispatch()
    const greetingWasShowed = useSelector((state:State) => state.greetingWasShowed)
    const greetings = useMemo(()=>(<Portal><Greeting closePortal={() => dispatch(greetingWasShowedAction)} /></Portal>),[])
    
    return (
        <div className={classes.container}>
            {!greetingWasShowed && greetings}
            <BurgerMenu />
            <ProductList />
        </div>
    )
    
}

export default HomePage;
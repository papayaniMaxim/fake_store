import classes from './HomePage.module.css'
import ProductList from '../components/ProductList';
import BurgerMenu from '../components/BurgerMenu';
function HomePage() {
    
    return (
        <div className={classes.container}>
            <BurgerMenu/>
            <ProductList />
        </div>
    )
    
}

export default HomePage;
import classes from './HomePage.module.css'
import ProductList from '../components/ProductList';
import Search from '../components/Search';
import Sorting from '../components/Sorting';
import Categories from '../components/Categories';
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

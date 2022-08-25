import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useGeneratorCategory from '../hooks/useGeneratorCategory'
import { State } from '../interface/interfaces'
import { categoryChangedAction } from '../redux/actions'
import MyButton2 from '../UI/MyButton2'
import classes from './Categories.module.css'
import Sorting from './Sorting'

export default function Categories() {
    
    const products = useSelector((state: State) => state.products)
    const dispatch = useDispatch()
    const categories = useGeneratorCategory(products)

    const categoryButtons = useMemo(() => {
        return categories.map(category => <MyButton2 category={category} onClick={()=> dispatch(categoryChangedAction(category))} key={category}>{category}</MyButton2>)
    }, [categories])

    return (
        <div onClick={event => event.stopPropagation()} className={classes.categorybuttons}>
            {categoryButtons}
            <div className={classes.sortContainer}>
            Sort by: <Sorting />
            </div>
        </div>
    )
}
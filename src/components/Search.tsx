import classes from './Search.module.css'
import MyInput from "../UI/MyInput";
import { useDispatch } from 'react-redux';
import { searchChangedAction } from '../redux/actions';

export default function Search() {
    
    const dispatch = useDispatch()
    
    return (
        <MyInput
            placeholder='Search...'
            onChange={event => dispatch(searchChangedAction(event.target.value))} />
    )
}
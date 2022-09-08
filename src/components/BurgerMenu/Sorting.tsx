import { useDispatch } from "react-redux";
import { sortChangedAction } from "../../redux/actions";
import MySelect from "../../UI/MySelect";

export default function Sorting() {
    const dispatch = useDispatch()

    return <MySelect onChange={event => dispatch(sortChangedAction(event.target.value))} options={['Title', 'Price']}/>
}
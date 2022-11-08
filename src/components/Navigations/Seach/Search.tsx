import { useDispatch } from "react-redux";
import MyInput from "../../../UI/MyInput";
import { searchChangedAction } from "../../../redux/actions";

export default function Search() {
  const dispatch = useDispatch();

  return (
    <MyInput
      placeholder="Search..."
      onChange={(value) => dispatch(searchChangedAction(value))}
    />
  );
}

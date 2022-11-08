import CardOrder from "../components/Cart/CardOrder/CardOrder";
import CardProductList from "../components/Cart/CardProductList/CardProductList";
import classes from "./Card.module.css";

function Card() {
  return (
    <div className={classes.card}>
      <CardProductList />
      <CardOrder />
    </div>
  );
}
export default Card;

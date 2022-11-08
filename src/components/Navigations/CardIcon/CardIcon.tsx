import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../interface/interfaces";
import CardProductList from "../../Cart/CardProductList/CardProductList";
import classes from "./CardIcon.module.css";

function CardIcon() {
  const [modalOpen, setModalOpen] = useState(false);
  const cardItemsCount = useSelector((state: State) => state.card.length);

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onMouseEnter={() => {
        !window.location.href.endsWith("card") &&
          cardItemsCount &&
          window.innerWidth > 1000 &&
          setModalOpen(() => true);
      }}
      onMouseLeave={() => setModalOpen(() => false)}
      onClick={() => setModalOpen(() => false)}
    >
      {modalOpen && (
        <div className={classes.modal}>
          <div className={classes.scaleContainer}>
            <CardProductList />
          </div>
        </div>
      )}

      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, delay: 1 }}
        className={classes.iconContainer}
      >
        {cardItemsCount ? (
          <div className={classes.count}>{cardItemsCount}</div>
        ) : null}
        <img
          className={classes.card_icon}
          src="https://i.ibb.co/j8mXKFW/5a364b752c0633-9984354215135077011803.png"
          alt="card icon"
        />
      </motion.div>
    </motion.div>
  );
}

export default CardIcon;

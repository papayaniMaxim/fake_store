import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../interface/interfaces";
import MyModal from "../../../UI/MyModal";
import classes from "../CardIcon/CardIcon.module.css";
import SingIn from "../../SingIn/SingIn";
import SingOut from "../../SingOut/SingOut";
import styles from "./UserIcon.module.css";

function UserIcon() {
  const userInfo = useSelector((state: State) => state.userInfo);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setIsOpen(() => true)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: 2 }}
          className={classes.iconContainer}
        >
          {userInfo?.login ? (
            <div className={styles.wrapper}>
              <div className={styles.subtitle}>{userInfo?.firstName}</div>
            </div>
          ) : null}
          <img
            className={classes.card_icon}
            src={
              userInfo?.login
                ? "https://i.ibb.co/M8p6YfC/user-3296.png"
                : "https://cdn-icons-png.flaticon.com/512/3580/3580168.png"
            }
            alt="Log in icon"
          />
        </motion.div>
      </motion.div>
      {isOpen && (
        <MyModal setModalIsOpen={() => setIsOpen(() => false)}>
          {userInfo?.login ? (
            <SingOut setModalIsOpen={() => setIsOpen(() => false)} />
          ) : (
            <SingIn setModalIsOpen={() => setIsOpen(() => false)} />
          )}
        </MyModal>
      )}
    </>
  );
}
export default UserIcon;

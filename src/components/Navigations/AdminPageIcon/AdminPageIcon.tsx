import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { State } from "../../../interface/interfaces";
import classes from "./AdminPageIcon.module.css";

function AdminPageIcon() {
  const user = useSelector((state: State) => state.userInfo);
  const adminUID = "PVqBPq4zyohwxdU6Zj5eaxbuwSI3";
  const isAdmin = user?.uid === adminUID;

  if (!isAdmin) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, delay: 1 }}
        className={classes.iconContainer}
      >
        <img
          className={classes.img}
          src="https://i.ibb.co/7kMSrz4/global-settings.png"
          alt="card icon"
        />
      </motion.div>
    </motion.div>
  );
}

export default AdminPageIcon;

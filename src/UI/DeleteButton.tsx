import { ReactNode } from "react";
import classes from "./DeleteButton.module.css";

function DeleteButton(props: { children?: ReactNode; onClick?: () => void }) {
  return (
    <div onClick={props.onClick} className={classes.container}>
      {props.children && (
        <div className={classes.children}>{props.children}</div>
      )}
      <div className={classes.cross}>
        <div className={classes.crossLine1}></div>
        <div className={classes.crossLine2}></div>
      </div>
    </div>
  );
}

export default DeleteButton;

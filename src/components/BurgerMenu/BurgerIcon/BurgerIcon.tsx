import classes from "./BurgerIcon.module.css";

function BurgerIcon(props: { open: boolean }) {
  const open = props.open;
  return (
    <div className={classes.icon}>
      <div
        className={
          !open ? classes.item1 : [classes.item1, classes.item11].join(" ")
        }
      ></div>
      <div
        className={
          !open ? classes.item2 : [classes.item2, classes.item22].join(" ")
        }
      ></div>
      <div
        className={
          !open ? classes.item3 : [classes.item3, classes.item33].join(" ")
        }
      ></div>
    </div>
  );
}

export default BurgerIcon;

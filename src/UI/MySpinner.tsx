import classes from "./MySpinner.module.css";

export default function MySpinner() {
  let moveblob = "move-blob";
  let className1 = `${classes.blob} ${classes.top}`;
  let className2 = `${classes.blob} ${classes.bottom}`;
  let className3 = `${classes.blob} ${classes.left}`;
  let className4 = `${classes.blob} ${classes[moveblob]}`;

  return (
    <div className={classes.spinner}>
      <div className={className1}></div>
      <div className={className2}></div>
      <div className={className3}></div>
      <div className={className4}></div>
    </div>
  );
}

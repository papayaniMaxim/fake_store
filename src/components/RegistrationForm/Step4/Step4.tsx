import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserInfo } from "../../../redux/actions";
import registrateFirebase from "../../../services/registrate";
import { regContext } from "../regContext";
import classes from "./Step4.module.css";
function Step4() {
  const { firstName, lastName, email, tel, password } = useContext(regContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.infoTable}>
        <h1 className={classes.tableTitle}>Check info</h1>
        <div className={classes.tableRow}>
          <h2 className={classes.rowTitle}>First name</h2>
          <h2 className={classes.rowValue}>{firstName}</h2>
        </div>
        <div className={classes.tableRow}>
          <h2 className={classes.rowTitle}>Last name</h2>
          <h2 className={classes.rowValue}>{lastName}</h2>
        </div>
        <div className={classes.tableRow}>
          <h2 className={classes.rowTitle}>Telephone</h2>
          <h2 className={classes.rowValue}>{tel}</h2>
        </div>
        <div className={classes.tableRow}>
          <h2 className={classes.rowTitle}>E-mail</h2>
          <h2 className={classes.rowValue}>{email}</h2>
        </div>
      </div>
      <button
        onClick={() => {
          registrateFirebase(firstName, lastName, email, tel, password).then(
            (user) => {
              if (user) dispatch(addUserInfo(user));
            }
          );
          navigate("/");
        }}
        className={classes.button}
      >
        Finish
      </button>
    </div>
  );
}

export default Step4;

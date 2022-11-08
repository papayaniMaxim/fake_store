import { useContext } from "react";
import { Link } from "react-router-dom";
import { regContext } from "../regContext";
import classes from "./Step1.module.css";
function Step1() {
  const { firstName, lastName, setFirstName, setLastName } =
    useContext(regContext);

  const isValid = !!firstName?.length && !!lastName?.length;

  return (
    <form className={classes.container}>
      <input
        onChange={(e) => {
          let lastSymbol = Array.from(e.target.value)[
            e.target.value.length - 1
          ];
          if (+lastSymbol || +lastSymbol === 0) return;
          setFirstName(() => {
            if (!firstName) return e.target.value.toUpperCase();
            return e.target.value;
          });
        }}
        className={classes.input}
        placeholder="Firstname"
        value={firstName}
      />
      <input
        onChange={(e) => {
          let lastSymbol = Array.from(e.target.value)[
            e.target.value.length - 1
          ];
          if (+lastSymbol || +lastSymbol === 0) return;
          setLastName(() => {
            if (!lastName) return e.target.value.toUpperCase();
            return e.target.value;
          });
        }}
        className={classes.input}
        placeholder="Lastname"
        value={lastName}
      />
      {isValid && (
        <Link to="/reg/step2">
          <button className={classes.button}>Next</button>
        </Link>
      )}
    </form>
  );
}

export default Step1;

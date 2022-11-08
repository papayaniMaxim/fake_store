import { useContext } from "react";
import classes from "../Step1/Step1.module.css";
import { Link } from "react-router-dom";
import { regContext } from "../regContext";

function Step3() {
  const { password, setPassword, checkPassword, setCheckPassword } =
    useContext(regContext);

  const isValidForm = (
    password: string | undefined,
    checkPassword: string | undefined
  ): { message?: string; isValid: boolean } => {
    if (!password) return { isValid: false };
    if (password.length < 8)
      return { message: "Password length less than 8 symbols", isValid: false };
    if (!checkPassword) return { isValid: false };
    if (password !== checkPassword)
      return {
        message: "Password and password repeat are not equal",
        isValid: false,
      };
    return { isValid: true };
  };

  return (
    <form className={classes.container}>
      <input
        type="password"
        onChange={(e) => {
          setPassword(() => e.target.value);
        }}
        className={classes.input}
        placeholder="Password (more than 8 symbols)"
        value={password}
      />
      <input
        type="password"
        onChange={(e) => setCheckPassword(() => e.target.value)}
        className={classes.input}
        placeholder="Password repeat"
        value={checkPassword}
      />
      <div className={classes.error}>
        {isValidForm(password, checkPassword).message}
      </div>
      {isValidForm(password, checkPassword).isValid && (
        <Link to="/reg/step4">
          <button className={classes.button}>Next</button>
        </Link>
      )}
    </form>
  );
}

export default Step3;

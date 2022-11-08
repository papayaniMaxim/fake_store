import { useContext } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Link } from "react-router-dom";
import { isValidEmail } from "../../../services/validators";
import { regContext } from "../regContext";
import classes from "../Step1/Step1.module.css";
import "react-phone-number-input/style.css";

function Step2() {
  const { tel, setTel, email, setEmail } = useContext(regContext);

  const isValidForm = (
    tel: string | undefined,
    email: string | undefined
  ): { message?: string; isValid: boolean } => {
    if (!tel && !email) return { isValid: false };
    if (!tel) return { message: "⚠ Input phone number", isValid: false };
    if (!isValidPhoneNumber(tel))
      return { message: "⚠ Phone number is not valid", isValid: false };
    if (!email) return { message: "⚠ Input email", isValid: false };
    if (!isValidEmail(email))
      return { message: "⚠ Email is not valid", isValid: false };
    return { isValid: true };
  };
  return (
    <form className={classes.container}>
      <PhoneInput
        placeholder="Phone number"
        className={classes.input}
        value={tel}
        // defaultCountry="IN"
        onChange={setTel}
      />
      <input
        type="email"
        onChange={(e) => {
          setEmail(() => {
            return e.target.value;
          });
        }}
        className={classes.input}
        placeholder="Email"
        value={email}
      />
      <div className={classes.error}>{isValidForm(tel, email).message}</div>
      {isValidForm(tel, email).isValid && (
        <Link to="/reg/step3">
          <button className={classes.button}>Next</button>
        </Link>
      )}
    </form>
  );
}

export default Step2;

import { useState } from "react";
import sendMessage from "../../services/sendMessage";
import { normalisePhoneNumber } from "../../services/validators";
import MySpinner from "../../UI/MySpinner";
import classes from "./CallMeForm.module.css";

function CallMeForm(props: { setOpenModal(): void }) {
  const [userName, setUserName] = useState<string>("");
  const [userPhone, setUserPhone] = useState<number | string>("");
  const [userCompany, setUserCompany] = useState<string>();
  const [message, setMessage] = useState<string>("");
  const [sendingStatus, setSendingStatus] = useState("PENDING");

  const handler = () => {
    setSendingStatus("LOAD");
    sendMessage(userName, userPhone, message)
      .then(
        (resolve) => {
          setSendingStatus("FULLFILLED");
        },
        (error) => {
          setSendingStatus("REJECTED");
        }
      )
      .finally(() => setTimeout(props.setOpenModal, 2000));
  };

  return (
    <>
      {sendingStatus === "PENDING" ? (
        <div className={classes.container}>
          <form className={classes.form}>
            <input
              value={userName}
              onChange={(e) => setUserName(() => e.target.value)}
              className={classes.input}
              placeholder="Name / Имя"
              type="text"
            />
            <input
              value={userCompany}
              onChange={(e) => setUserCompany(() => e.target.value)}
              className={classes.input}
              placeholder="Company / Компания"
              type="text"
            />

            <input
              value={userPhone}
              onChange={(e) => {
                e.target.value = normalisePhoneNumber(e.target.value);
                setUserPhone(() => e.target.value);
              }}
              className={classes.input}
              placeholder="Tel / Телефон"
              type="tel"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(() => e.target.value)}
              className={[classes.input, classes.textarea].join(" ")}
              placeholder="Message / Сообщение..."
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handler();
              }}
              className={classes.button}
            >
              Send / Отправить
            </button>
          </form>
        </div>
      ) : (
        (sendingStatus === "LOAD" && <MySpinner />) ||
        (sendingStatus === "FULLFILLED" && (
          <img
            alt="img"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg"
          />
        )) ||
        (sendingStatus === "REJECTED" && (
          <img
            alt="img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/OOjs_UI_icon_error-destructive.svg/240px-OOjs_UI_icon_error-destructive.svg.png"
          />
        ))
      )}
    </>
  );
}

export default CallMeForm;

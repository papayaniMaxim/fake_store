import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import classes from "./MyInput.module.css";
export default function MyInput(props: {
  onChange: (param: any) => any;
  placeholder?: string;
  type?: string;
}) {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  const handler = () => {
    if (!window.location.href.endsWith("/")) navigate("/");
  };

  return (
    <div className={classes.container}>
      <motion.input
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: 1.5 }}
        className={classes.myinput}
        type={props.type || "text"}
        onChange={(e) => {
          handler();
          setValue(() => e.target.value);
          props.onChange(e.target.value);
        }}
        placeholder={props.placeholder}
        value={value}
      ></motion.input>
      {value && (
        <div className={classes.deleteItem}>
          <DeleteButton
            onClick={() => {
              props.onChange("");
              setValue(() => "");
            }}
          />
        </div>
      )}
    </div>
  );
}

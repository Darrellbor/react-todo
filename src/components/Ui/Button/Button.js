import React from "react";
import Styles from "./Button.css";

const Button = props => {
  return (
    <button
      className={Styles.Button}
      disabled={props.disabled}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;

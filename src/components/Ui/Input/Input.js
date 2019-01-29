import React from "react";
import styles from "./Input.css";

const Input = props => {
  let inputElement = null;
  const inputStyles = [styles.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputStyles.push(styles.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputStyles.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          onBlur={props.validationCheck}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          style={{ height: "111px" }}
          className={inputStyles.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          onBlur={props.validationCheck}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputStyles.join(" ")}
          value={props.value}
          onChange={props.changed}
          onBlur={props.validationCheck}
        >
          <option value="" />
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputStyles.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          onBlur={props.validationCheck}
        />
      );
  }

  return (
    <div className={styles.Input}>
      {props.label ? (
        <label className={styles.Label}>{props.label}</label>
      ) : null}
      {inputElement}
    </div>
  );
};

export default Input;

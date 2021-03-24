import React from "react";
import styles from "./Input.module.css";

const input = (props) => {
  let inputElement = null;
  let errorMessage = null;
  const inputClasses = [styles.InputElement];

  if (props.invalid && props.touched) {
    inputClasses.push(styles.Invalid);
    errorMessage = (
      <p style={{ margin: "5px 0", color: "red", textAlign: "left" }}>
        Please enter a valid {props.elementConfig.valuetype}
      </p>
    );
  }

  switch (props.elementtype) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          onBlur={props.errorHandler}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }
  return (
    <div className={styles.input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
      {errorMessage}
    </div>
  );
};
export default input;

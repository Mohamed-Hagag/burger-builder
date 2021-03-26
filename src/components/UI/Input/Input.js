import React, { Fragment } from "react";
import styles from "./Input.module.css";

const input = (props) => {
  let inputElement = null;
  let errorMessage = null;
  let inputClasses = [styles.InputElement];

  if (props.customClassName) {
    inputClasses = [styles.ContactDataInputElement];
  }

  if (props.invalid && props.touched) {
    inputClasses.push(styles.Invalid);
    errorMessage = (
      <p
        style={{
          margin: "5px 0",
          color: "red",
          textAlign: "left",
        }}
      >
        {props.errorMessage}
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
          onBlur={props.errorHandler}
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
    <Fragment>
      {" "}
      <div
        className={
          props.customClassName ? styles.ContactDataInput : styles.Input
        }
      >
        <label className={styles.Label}>{props.label}</label>
        <div style={props.customClassName ? { width: "80%" } : null}>
          {inputElement}
          {errorMessage}
        </div>
      </div>
    </Fragment>
  );
};
export default input;

import React from "react";
import styles from "./BuildControl.module.css";

const buildControl = (props) => {
  const prices = { Salad: 3, Cheese: 5, Meat: 20, Bacon: 7 };

  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>
        {props.label}
        <span style={{ fontWeight: "400" }}> ({prices[props.label]} EGP)</span>
      </div>
      <button
        className={styles.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        <strong> -</strong>
      </button>
      <p style={{ padding: "0 4px" }}>{props.amount}</p>
      <button className={styles.More} onClick={props.added}>
        <strong> +</strong>
      </button>
    </div>
  );
};
export default buildControl;

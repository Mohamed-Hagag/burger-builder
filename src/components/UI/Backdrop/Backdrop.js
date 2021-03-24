import React from "react";
import styles from "./Backdrop.module.css";
const backdrop = (props) =>
  props.show ? (
    <div
      className={[styles.Backdrop, props.displayNone].join(" ")}
      onClick={props.clicked}
    ></div>
  ) : null;
export default backdrop;

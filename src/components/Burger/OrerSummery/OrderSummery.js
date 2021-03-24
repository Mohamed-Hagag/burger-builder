import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const orderSummery = (props) => {
  const ingredientSummery = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p style={{ textAlign: "left" }}>
        A delicious burger with the following ingredients:
      </p>
      <ul style={{ textAlign: "left" }}>{ingredientSummery}</ul>
      <p>
        <strong> Total Price: {props.price.toFixed(2)}</strong>
      </p>

      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchasingCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchasingContinue}>
        CONTINUE
      </Button>
    </Fragment>
  );
};
export default orderSummery;

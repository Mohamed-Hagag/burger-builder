import React from "react";
import styles from "./Order.module.css";

const order = (props) => {
  const ingredients = [];
  for (let i in props.ingredients) {
    ingredients.push({ name: i, amount: props.ingredients[i] });
  }
  const ingredientOutput = ingredients.map((ingredient) => (
    <span
      style={{
        textTransform: "capitalize",
        display: "inline-block",
        margin: "0 8px",
        border: "1px solid #ccc",
        padding: "5px",
      }}
      key={ingredient.name}
    >
      {ingredient.name} ({ingredient.amount})
    </span>
  ));
  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>EGP {props.price}</strong>
      </p>
    </div>
  );
};

export default order;

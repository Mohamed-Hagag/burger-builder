import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredients = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name,
  };
};
export const removeIngredients = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name,
  };
};

const getIngredients = (ingredients) => {
  return {
    type: actionTypes.INIT_INGREDIENTS,
    ingredients: ingredients,
  };
};
const fetchError = (error) => {
  return {
    type: actionTypes.FETCH_ERRORS,
    error: error,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        "https://react-my-burger-df27e-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((res) => dispatch(getIngredients(res.data)))
      .catch((error) => dispatch(fetchError(error)));
  };
};

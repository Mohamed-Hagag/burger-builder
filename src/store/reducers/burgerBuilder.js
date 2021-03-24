import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const prices = { salad: 0.5, cheese: 0.4, meat: 1.3, bacon: 0.7 };

const addIngredients = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updatedObject(
    state.ingredients,
    updatedIngredient
  );
  return updatedObject(state, {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + prices[action.ingredientName],
    building: true,
  });
};

const removeIngredients = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngredients = updatedObject(
    state.ingredients,
    updatedIngredient
  );
  return updatedObject(state, {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - prices[action.ingredientName],
    building: true,
  });
};

const initIngredients = (state, action) => {
  return updatedObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
    building: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS: {
      return addIngredients(state, action);
    }
    case actionTypes.REMOVE_INGREDIENTS: {
      return removeIngredients(state, action);
    }
    case actionTypes.INIT_INGREDIENTS: {
      return initIngredients(state, action);
    }
    case actionTypes.FETCH_ERRORS: {
      return updatedObject(state, { error: true });
    }
    default: {
      return state;
    }
  }
};
export default reducer;

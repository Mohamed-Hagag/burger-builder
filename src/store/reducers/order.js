import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";

const initialState = { orders: [], loading: false, redirect: false };

const purchaseSuccess = (state, action) => {
  const newOrder = { ...action.orderData, id: action.id };
  return updatedObject(state, {
    loading: false,
    redirect: true,
    orders: state.orders.concat(newOrder),
  });
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER: {
      return updatedObject(state, { loading: true });
    }
    case actionTypes.PURCHASE_REDIRECT: {
      return updatedObject(state, { redirect: false });
    }
    case actionTypes.PURCHASE_SUCCESS: {
      return purchaseSuccess(state, action);
    }

    case actionTypes.PURCHASE_FAIL: {
      return updatedObject(state, { loading: false });
    }
    case actionTypes.FETCH_ORDERS_START: {
      return updatedObject(state, { loading: true });
    }
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updatedObject(state, { orders: action.orders, loading: false });

    case actionTypes.FETCH_ORDERS_FAIL:
      return updatedObject(state, { loading: false });

    default:
      return state;
  }
};
export default orderReducer;

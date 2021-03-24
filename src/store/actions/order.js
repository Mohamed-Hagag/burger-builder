import axios from "../../axios-orders";
import * as actionTypes from "./actionTypes";

export const purchaseSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_SUCCESS,
    id: id,
    orderData: orderData,
  };
};

export const purchaseFail = (error) => {
  return {
    type: actionTypes.PURCHASE_FAIL,
    error: error,
  };
};
export const purchaseRedirect = () => {
  return {
    type: actionTypes.PURCHASE_REDIRECT,
  };
};
export const purchaseBurger = () => {
  return {
    type: actionTypes.PURCHASE_BURGER,
  };
};

export const purchaseStart = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseBurger());
    axios
      .post(`/orders.json?auth=${token}`, orderData)
      .then((res) => {
        dispatch(purchaseSuccess(res.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchaseFail(error));
      });

    setTimeout(() => {
      dispatch(purchaseRedirect());
    }, 5000);
  };
};
export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};
export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};
export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    axios
      .get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((error) => dispatch(fetchOrdersFail(error)));
  };
};

import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";

const initialState = {
  token: null || localStorage.getItem("token"),
  userOrderId: null || localStorage.getItem("userOrderId"),
  email: null || localStorage.getItem("email"),
  error: null,
  loading: false,
  contactData: null,
  isSignup: true,
};

const logout = (state, action) => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiredDate");
  localStorage.removeItem("userOrderId");
  localStorage.removeItem("email");
  return updatedObject(state, { token: null, userOrderId: null });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SWITCH: {
      return updatedObject(state, { isSignup: !state.isSignup });
    }
    case actionTypes.STORE_SUCCESS: {
      return updatedObject(state, { contactData: action.contactData });
    }

    case actionTypes.AUTH_START: {
      return updatedObject(state, { loading: true });
    }
    case actionTypes.AUTH_SUCCESS: {
      return updatedObject(state, {
        token: action.token,
        userOrderId: action.userOrderId,
        loading: false,
        error: null,
      });
    }
    case actionTypes.AUTH_FAIL: {
      return updatedObject(state, { error: action.error });
    }
    case actionTypes.LOGOUT: {
      return logout(state, action);
    }
    default:
      return state;
  }
};
export default authReducer;

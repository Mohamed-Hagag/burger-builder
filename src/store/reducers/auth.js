import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";

const initialState = {
  token: null || localStorage.getItem("token"),
  userId: null,
  error: null,
  loading: false,
};

const logout = (state, action) => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiredDate");
  return updatedObject(state, { token: null, userId: null });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: {
      return updatedObject(state, { loading: true });
    }
    case actionTypes.AUTH_SUCCESS: {
      return updatedObject(state, {
        token: action.token,
        userId: action.userId,
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

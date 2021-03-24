import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};

export const authSuccess = (token, id) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: id,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const checkAuthTimeout = (expiredTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expiredTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGKuK-wRQmRIcpQsQ13FyWXeW-6M5dNmI";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGKuK-wRQmRIcpQsQ13FyWXeW-6M5dNmI ";
    }
    axios
      .post(url, authData)
      .then((res) => {
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeout(res.data.expiresIn));
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("expiredDate", res.data.expiresIn);
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};

export const authSuccess = (token, id) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userOrderId: id,
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

export const storeSuccess = (contactData) => {
  return {
    type: actionTypes.STORE_SUCCESS,
    contactData: contactData,
  };
};

export const storeContactData = (contactData, token) => {
  return (dispatch) => {
    axios
      .post(
        `https://react-my-burger-df27e-default-rtdb.firebaseio.com/users.json?auth=${token}`,
        contactData
      )
      .then((res) => {
        dispatch(storeSuccess(contactData));
      });
  };
};

export const fetchContactData = (token, email) => {
  return (dispatch) => {
    axios
      .get(
        `https://react-my-burger-df27e-default-rtdb.firebaseio.com/users.json?auth=${token}&orderBy="email"&equalTo="${email}"`
      )
      .then((res) => {
        dispatch(storeSuccess(Object.values(res.data)[0]));
      });
  };
};
export const authSwitch = () => {
  return {
    type: actionTypes.AUTH_SWITCH,
  };
};

export const auth = (email, password, isSignup, contactData) => {
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
        localStorage.setItem("userOrderId", res.data.localId);
        localStorage.setItem("email", email);
        if (isSignup) {
          dispatch(storeContactData(contactData, res.data.idToken));
        }
        if (!isSignup) {
          dispatch(fetchContactData(res.data.idToken, email));
        }
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

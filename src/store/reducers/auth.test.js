import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null || localStorage.getItem("token"),
      userOrderId: null,
      error: null,
      loading: false,
    });
  });
  it("should store the token", () => {
    expect(
      reducer(
        {
          token: null || localStorage.getItem("token"),
          userOrderId: null,
          error: null,
          loading: false,
        },
        { type: actionTypes.AUTH_SUCCESS, token: "TOKEN", userOrderId: "ID" }
      )
    ).toEqual({
      token: "TOKEN",
      userOrderId: "ID",
      loading: false,
      error: null,
    });
  });
});

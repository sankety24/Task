import { Action } from "@remix-run/router";
import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
  isAuthError: false,
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuth:true,
        token:payload
      }
      
    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuth:false,
        token:"",
        isAuthError:true,
      }

      default:
        return oldState;
  }
};
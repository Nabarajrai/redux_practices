import axios from "axios";

import { CAKE_ACTIONS_TYPES } from "./actionTypes";
import { ICECREAM_ACTIONS_TYPES } from "./actionTypes";
import { USER_ACTIONS_TYPES } from "./actionTypes";

export const BuyCake = () => {
  return {
    type: CAKE_ACTIONS_TYPES.BUY_CAKES,
  };
};
export const BuyIcecream = value => {
  return {
    type: ICECREAM_ACTIONS_TYPES.BUY_ICECREAM,
    payload: value,
  };
};

export const FetchUserRequest = () => {
  return {
    type: USER_ACTIONS_TYPES.FETCH_USERS_REQUEST,
  };
};
export const FetchUserSuccess = users => {
  return {
    type: USER_ACTIONS_TYPES.FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const FetchUserError = error => {
  return {
    type: USER_ACTIONS_TYPES.FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const FetchUsers = () => {
  return async dispatch => {
    dispatch(FetchUserRequest());
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        const users = res.data;
        dispatch(FetchUserSuccess(users));
      })
      .catch(err => {
        const errorMsg = err.message;
        dispatch(FetchUserError(errorMsg));
      });
  };
};

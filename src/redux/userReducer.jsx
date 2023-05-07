import { USER_ACTIONS_TYPES } from "./actionTypes";

const INITIAL_USER = {
  loading: false,
  users: [],
  err: "",
};

export const userReducer = (state = INITIAL_USER, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS_TYPES.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_ACTIONS_TYPES.FETCH_USER_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
        err: "",
      };
    case USER_ACTIONS_TYPES.FETCH_USERS_FAILURE:
      return {
        ...state,
        users: [],
        err: payload,
        loading: false,
      };
    default:
      return state;
  }
};

import { ACTION_TYPES } from "./actionTypes";

export const INITIAL_DATAS = {
  loading: false,
  post: {},
  error: false,
};

export const postReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.APP_START:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.FETCHED_DATA:
      return {
        ...state,
        loading: false,
        post: payload,
      };
    case ACTION_TYPES.ERROR_DATA:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

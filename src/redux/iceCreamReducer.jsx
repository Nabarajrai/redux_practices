import { ICECREAM_ACTIONS_TYPES } from "./actionTypes";

const INITIAL_DATAS = {
  numOfIce: 10,
};

export const iceReducer = (state = INITIAL_DATAS, action) => {
  const { type, payload } = action;
  switch (type) {
    case ICECREAM_ACTIONS_TYPES.BUY_ICECREAM:
      return {
        ...state,
        numOfIce: state.numOfIce - payload,
      };
    default:
      return state;
  }
};

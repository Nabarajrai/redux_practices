import { CAKE_ACTIONS_TYPES } from "./actionTypes";

const INITIAL_VALUES = {
  numOfCakes: 20,
};

export const cakeReducer = (state = INITIAL_VALUES, action) => {
  const { type } = action;
  switch (type) {
    case CAKE_ACTIONS_TYPES.BUY_CAKES:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

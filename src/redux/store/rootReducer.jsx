import { combineReducers } from "redux";
import { cakeReducer } from "../cakeReducer";
import { iceReducer } from "../iceCreamReducer";
import { userReducer } from "../userReducer";

export const rootRedcucer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  user: userReducer,
});

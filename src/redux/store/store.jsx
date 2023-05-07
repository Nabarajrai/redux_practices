import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { rootRedcucer } from "./rootReducer";
const store = createStore(
  rootRedcucer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;

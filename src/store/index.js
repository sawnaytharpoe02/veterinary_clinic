import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
);


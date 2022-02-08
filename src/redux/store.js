import {combineReducers, compose, createStore} from "redux";
import settingsReducer from "./settingsReducer";


const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware =
  ext && process.env.NODE_ENV === "development" ? ext() : f => f;

export const store = createStore(
  combineReducers({
    settingsReducer
  }),
  compose(
    devtoolMiddleware
  )
);

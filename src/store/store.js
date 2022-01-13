import { combineReducers, createStore } from "redux";
import { authReducer } from "../features/Login/reducer";

import { reducer } from "../features/Todos/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: reducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

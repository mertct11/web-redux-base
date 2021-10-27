import applicationReducer from "../reducer";
import { createStore } from "redux";

export default createStore(
  applicationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

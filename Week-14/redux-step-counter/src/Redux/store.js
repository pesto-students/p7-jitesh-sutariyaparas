import { createStore } from "redux";
import stepCounterReducer from "./reducers";

const store = createStore(stepCounterReducer);

export default store;

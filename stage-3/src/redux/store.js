import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

const middleware = applyMiddleware(promiseMiddleware());
const store = createStore(reducer, middleware);

export default store;

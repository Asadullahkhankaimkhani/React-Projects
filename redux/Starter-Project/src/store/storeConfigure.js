import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./task";

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

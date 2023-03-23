import {
	legacy_createStore as createStore,
	applyMiddleware,
	compose,
} from "redux";
import thunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";

import rootReducer from "./task";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	devToolsEnhancer({
		trace: true,
	})
);

export default store;

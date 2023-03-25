// import {
// 	legacy_createStore as createStore,
// 	applyMiddleware,
// 	compose,
// } from "redux";
// import thunk from "redux-thunk";
// import { devToolsEnhancer } from "redux-devtools-extension";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from "./employee";
import taskReducer from "./task";
import logger from "redux-logger";
import error from "../../middleware/error";

const store = configureStore({
	reducer: {
		task: taskReducer,
		employee: employeeReducer,
	},
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		logger,
		error,
	],
});

export default store;

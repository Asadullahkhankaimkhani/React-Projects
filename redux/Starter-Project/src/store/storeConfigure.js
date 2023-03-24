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

const store = configureStore({
	reducer: rootReducer,
});

export default store;

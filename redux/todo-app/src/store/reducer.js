import { combineReducers } from "redux";

import taskReducer from "./task";
import employeeReducer from "./employee";

const rootReducer = combineReducers({
	task: taskReducer,
	employee: employeeReducer,
});

export default rootReducer;

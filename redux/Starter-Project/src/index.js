import store from "./store/storeConfigure";
import {
	addTask,
	removeTask,
	updateTask,
	getTasks,
	fetchTask,
	loadTasks,
	addNewTask,
	deleteTask,
	updateTaskStatus,
} from "./store/task";
import { addEmployee } from "./store/employee";

// store.dispatch(addTask({ task: "Learn Redux" }));
// console.log(store.getState());

// // const unsubscribe = store.subscribe(() => {
// // 	console.log("Updated", store.getState());
// // });

// store.dispatch(addTask({ task: "Learn Redux" }));

// store.dispatch(updateTask({ id: 1 }));

// store.dispatch(removeTask({ id: 1 }));

// store.dispatch(addEmployee({ name: "John" }));

// //unsubscribe();
// console.log(store.getState());

// store.dispatch({ type: "SHOW_ERROR", payload: { message: "Error" } });

import axios from "axios";
import { apiCallBegan } from "./store/api";

// get all task from server

// const getTasksData = async () => {
// 	try {
// 		const response = await axios.get("http://localhost:5000/api/tasksS");

// 		store.dispatch(
// 			getTasks({
// 				tasks: response.data,
// 			})
// 		);
// 	} catch (error) {
// 		store.dispatch({
// 			type: "SHOW_ERROR",
// 			payload: {
// 				message: error.message,
// 			},
// 		});
// 	}
// };

// getTasksData();

// store.dispatch(fetchTask());

store.dispatch(loadTasks());

store.dispatch(addNewTask({ task: "New  Redux" }));

store.dispatch(loadTasks());

store.dispatch(updateTaskStatus({ id: 6, completed: true }));
store.dispatch(loadTasks());

store.dispatch(deleteTask(6));

store.dispatch(loadTasks());

// // Action Types
// import { createAction, createReducer } from "@reduxjs/toolkit";

// // const ADD_TASK = "ADD_TASK";
// // const REMOVE_TASK = "REMOVE_TASK";
// // const UPDATE_TASK = "UPDATE_TASK";

// // Actions
// // export const addTask = (task) => {
// // 	return {
// // 		type: ADD_TASK,
// // 		payload: {
// // 			task,
// // 		},
// // 	};
// // };

// // export const removeTask = (id) => {
// // 	return {
// // 		type: REMOVE_TASK,
// // 		payload: {
// // 			id,
// // 		},
// // 	};
// // };

// // export const updateTask = (id) => {
// // 	return {
// // 		type: UPDATE_TASK,
// // 		payload: {
// // 			id,
// // 		},
// // 	};
// // };

// // export const fetchTodos = () => {
// // 	return async (dispatch, getState) => {
// // 		const response = await fetch(
// // 			"https://jsonplaceholder.typicode.com/todos/1"
// // 		);
// // 		const data = await response.json();

// // 		dispatch(addTask(data.title));
// // 	};
// // };

// // toolkit actions

// export const addTask = createAction("ADD_TASK");

// export const removeTask = createAction("REMOVE_TASK");

// export const updateTask = createAction("UPDATE_TASK");

// // Reducer

// let id = 0;
// // export default function reducer(state = [], action) {
// // 	switch (action.type) {
// // 		case addTask.type:
// // 			return [
// // 				...state,
// // 				{
// // 					id: ++id,
// // 					task: action.payload.task,
// // 					completed: false,
// // 				},
// // 			];

// // 		case removeTask.type:
// // 			return state.filter((task) => task.id !== action.payload.id);

// // 		case updateTask.type:
// // 			return state.map((task) => {
// // 				if (task.id === action.payload.id) {
// // 					return {
// // 						...task,
// // 						completed: !task.completed,
// // 					};
// // 				}
// // 				return task;
// // 			});
// // 		default:
// // 			return state;
// // 	}
// // }

// // toolkit reducer

// export default createReducer([], {
// 	[addTask.type]: (state, action) => {
// 		state.push({
// 			id: ++id,
// 			task: action.payload,
// 			completed: false,
// 		});
// 	},
// 	[removeTask.type]: (state, action) => {
// 		const index = state.findIndex((task) => task.id === action.payload.id);
// 		state.splice(index, 1);
// 	},
// 	[updateTask.type]: (state, action) => {
// 		const index = state.findIndex((task) => task.id === action.payload.id);
// 		state[index].completed = true;
// 	},
// });

import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const taskSlice = createSlice({
	name: "task",
	initialState: [],
	reducers: {
		addTask: (state, action) => {
			state.push({
				id: ++id,
				task: action.payload,
				completed: false,
			});
		},
		removeTask: (state, action) => {
			const index = state.findIndex((task) => task.id === action.payload.id);
			state.splice(index, 1);
		},
		updateTask: (state, action) => {
			const index = state.findIndex((task) => task.id === action.payload.id);
			state[index].completed = true;
		},
	},
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;

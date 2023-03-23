// Action Types

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const UPDATE_TASK = "UPDATE_TASK";

// Actions
export const addTask = (task) => {
	return {
		type: ADD_TASK,
		payload: {
			task,
		},
	};
};

export const removeTask = (id) => {
	return {
		type: REMOVE_TASK,
		payload: {
			id,
		},
	};
};

export const updateTask = (id) => {
	return {
		type: UPDATE_TASK,
		payload: {
			id,
		},
	};
};

export const fetchTodos = () => {
	return async (dispatch, getState) => {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos/1"
		);
		const data = await response.json();

		dispatch(addTask(data.title));
	};
};

// Reducer

let id = 0;
export default function reducer(state = [], action) {
	switch (action.type) {
		case ADD_TASK:
			return [
				...state,
				{
					id: ++id,
					task: action.payload.task,
					completed: false,
				},
			];

		case REMOVE_TASK:
			return state.filter((task) => task.id !== action.payload.id);

		case UPDATE_TASK:
			return state.map((task) => {
				if (task.id === action.payload.id) {
					return {
						...task,
						completed: !task.completed,
					};
				}
				return task;
			});
		default:
			return state;
	}
}

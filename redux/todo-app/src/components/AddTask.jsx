import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask, loadTasks } from "../store/task";

function AddTask() {
	const [task, setTask] = useState("");

	const dispatch = useDispatch();

	const handleAddTask = (e) => {
		e.preventDefault();
		dispatch(addNewTask({ task: task }));
		dispatch(loadTasks());
		setTask("");
	};

	return (
		<>
			<input
				type='text'
				placeholder='Add Task'
				onChange={(e) => setTask(e.target.value)}
				value={task}
			/>
			<button onClick={handleAddTask}>Add</button>
		</>
	);
}

export default AddTask;

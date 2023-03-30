import React, { useEffect, useState } from "react";
import { loadTasks } from "../store/task";

function Task() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		store.dispatch(loadTasks());
	}, []);

	return (
		<div>
			<h1>
				{tasks.map((task) => (
					<li key={task.id}>{task.task}</li>
				))}
			</h1>
		</div>
	);
}

export default Task;

import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../src/context/storeContext";
import { loadTasks } from "../src/store/task";

function Task() {
	const store = useContext(StoreContext);

	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		store.dispatch(loadTasks());

		const unsubscribe = store.subscribe(() => {
			setTasks(store.getState().task.tasks);
		});

		return () => {
			unsubscribe();
		};
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

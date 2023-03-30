import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../store/task";

function Task() {
	const dispatch = useDispatch();

	const { tasks, loading } = useSelector((state) => state.task);

	useEffect(() => {
		dispatch(loadTasks());
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<ul>
					{tasks.map((task) => (
						<li key={task.id}>{task.task}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Task;

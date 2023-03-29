import React from "react";
import { useContext } from "react";
import { StoreContext } from "../src/context/storeContext";

function Task() {
	const store = useContext(StoreContext);

	console.log(store);

	return (
		<div>
			<h1>Task</h1>
		</div>
	);
}

export default Task;

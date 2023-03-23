import store from "./store/storeConfigure";
import { addTask, removeTask, updateTask, fetchTodos } from "./store/task";

store.dispatch(addTask("Learn Redux"));
console.log(store.getState());

store.subscribe(() => {
	console.log("Store changed!", store.getState());
});

store.dispatch(addTask("Learn React"));

store.dispatch(updateTask(1));

store.dispatch(fetchTodos());
console.log(store.getState());

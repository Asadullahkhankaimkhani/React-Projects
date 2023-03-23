import store from "./store/storeConfigure";
import { addTask, removeTask, updateTask, fetchTodos } from "./store/task";

store.dispatch(addTask("Learn Redux"));
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
	console.log("Updated", store.getState());
});

store.dispatch(addTask("Learn React"));

store.dispatch(updateTask(1));

store.dispatch(fetchTodos());
unsubscribe();
console.log(store.getState());

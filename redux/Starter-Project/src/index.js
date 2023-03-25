import store from "./store/storeConfigure";
import { addTask, removeTask, updateTask } from "./store/task";
import { addEmployee } from "./store/employee";

store.dispatch(addTask({ task: "Learn Redux" }));
console.log(store.getState());

// const unsubscribe = store.subscribe(() => {
// 	console.log("Updated", store.getState());
// });

store.dispatch(addTask({ task: "Learn Redux" }));

store.dispatch(updateTask({ id: 1 }));

store.dispatch(removeTask({ id: 1 }));

store.dispatch(addEmployee({ name: "John" }));

//unsubscribe();
console.log(store.getState());

store.dispatch({ type: "SHOW_ERROR", payload: { message: "Error" } });

import store from "./store/storeConfigure";
import { addTask, removeTask, updateTask } from "./store/task";

store.dispatch(addTask("Learn Redux"));
console.log(store.getState());

store.dispatch(addTask("Learn React"));

store.dispatch(updateTask(1));

console.log(store.getState());
store.dispatch(removeTask(1));
console.log(store.getState());

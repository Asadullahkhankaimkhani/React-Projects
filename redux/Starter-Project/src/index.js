import store from "./store";
import { addTask, removeTask, updateTask } from "./action";

store.dispatch(addTask("Learn Redux"));
console.log(store.getState());

store.dispatch(addTask("Learn React"));

store.dispatch(updateTask(1));

console.log(store.getState());
store.dispatch(removeTask(1));
console.log(store.getState());

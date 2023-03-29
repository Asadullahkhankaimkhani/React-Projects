import Task from "../components/Task";
import store from "./store/storeConfigure";
import { StoreContext } from "./context/storeContext";

function App() {
	return (
		<StoreContext.Provider value={store}>
			<Task />
		</StoreContext.Provider>
	);
}

export default App;

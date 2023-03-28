const error = (store) => (next) => (action) => {
	if (action.type === "SHOW_ERROR") {
		console.log("Error: ", action.payload.message);
		next(action);
	} else {
		next(action);
	}
};

export default error;

const log = (store) => (next) => (action) => {
	console.log("Action Type: ", action.type);
	next(action);
};

export default log;

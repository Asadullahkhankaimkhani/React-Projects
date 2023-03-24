import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const taskSlice = createSlice({
	name: "employee",
	initialState: [],
	reducers: {
		addEmployee: (state, action) => {
			state.push({
				id: ++id,
				name: action.payload,
			});
		},
	},
});

export const { addEmployee } = taskSlice.actions;

export default taskSlice.reducer;

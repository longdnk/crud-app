import { configureStore } from '@reduxjs/toolkit';
import { reducer as counter } from "../features/count/redux/reducer";

export const store = configureStore({
	reducer: {
		counter: counter,
	},
});

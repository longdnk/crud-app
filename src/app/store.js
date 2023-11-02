import { configureStore } from '@reduxjs/toolkit';
import { reducer as counter } from "../features/count/redux/reducer";
import userReducer from '../features/user/userSlice';

export const store = configureStore({
	reducer: {
		counter: counter,
		user: userReducer,
	},
});

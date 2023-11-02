import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUser } from "./userApi";
import { pushMessage } from "../count/redux/action";

const initialState = {
	data: [],
	loading: false,
};
const delay = () => {
	return new Promise(resolve => setTimeout(resolve, 2000));
};
export const getUserAsync = createAsyncThunk(
	'user/fetchUser',
	async () => {
		await delay();
		const response = await fetchUser();
		return response.data;
	}
);

export const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(getUserAsync.pending, (state = initialState) => {
				state.loading = true;
			})
			.addCase(getUserAsync.fulfilled, (state = initialState, action) => {
				state.loading = false;
				state.data = action.payload;
				pushMessage('success', 'Get data success')
			})
			.addCase(getUserAsync.rejected, (state = initialState, action) => {
				state.loading = false;
				pushMessage('error', action?.error?.message)
			})
	}
})

export const selectUser = state => state.user.data;
export const selectLoading = state => state.user.loading;

const userReducer = userSlice.reducer;

export default userReducer;
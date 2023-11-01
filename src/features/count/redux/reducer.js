import initialState from "./initialState";
import * as actionType from "./constants";

export const reducer = (state = initialState, action) => {
	switch (action.type) {

		case actionType.ADD_NUMBER_ACTION:
			return {
				...state,
				count: state.count + 1,
			}
		case actionType.MINUS_NUMBER_ACTION:
			return {
				...state,
				count: state.count - 1,
			}

		// GET DATA
		case actionType.GET_DATA_ACTION_LOADING:
			return {
				...state,
				apiData: {
					...state.apiData,
					loading: true,
				}
			}
		case actionType.GET_DATA_ACTION:
			return {
				...state,
				apiData: {
					...state.apiData,
					data: action.payload,
					loading: false,
				}
			}

		default:
			return state;
	}
}
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
		case actionType.GET_DATA_REQUEST:
			return {
				...state,
				apiData: {
					...state.apiData,
					loading: true,
				}
			}
		case actionType.GET_DATA_SUCCESS:
			return {
				...state,
				apiData: {
					...state.apiData,
					data: action.payload,
					loading: false,
				}
			}
		case actionType.GET_DATA_ERROR:
			return {
				...state,
				apiData: {
					...state.apiData,
					loading: false,
				}
			}

		default:
			return state;
	}
}
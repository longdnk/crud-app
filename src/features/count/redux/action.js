import * as constants from './constants';
import { api } from "../../../api";

export const addNumberRequest = () => {
	return dispatch => {
		dispatch(addNumberRequestAction());
	}
}
const addNumberRequestAction = () => {
	return {
		type: constants.ADD_NUMBER_ACTION,
		payload: null,
	}
}

export const minusNumberRequest = () => {
	return dispatch => {
		dispatch(minusNumberRequestAction());
	}
}
const minusNumberRequestAction = () => {
	return {
		type: constants.MINUS_NUMBER_ACTION,
		payload: null,
	}
}

export const getDataRequest = () => {
	return dispatch => {
		dispatch(getDataActionLoading());
		api.get('account').then(res => {
			dispatch(getDataAction(res));
		}).catch(e => {
			console.log(e.message);
		})
	}
}
const getDataAction = res => {
	return {
		type: constants.GET_DATA_ACTION,
		payload: res.data,
	}
}
const getDataActionLoading = () => {
	return {
		type: constants.GET_DATA_ACTION_LOADING,
		payload: null,
	}
}

import * as constants from './constants';
import { api } from "../../../api";
import { toast } from "sonner";

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

export const getData = () => {
	return dispatch => {
		dispatch(getDataRequest());
		setTimeout(() => {
			return api.get('account').then(res => {
				dispatch(getDataSuccess(res));
				pushMessage('success', 'Get data success');
			}).catch(e => {
				dispatch(getDataError());
				pushMessage('error', e.message ?? e.response.data.message);
			})
		}, 1000)
	}
}

const getDataRequest = () => {
	return {
		type: constants.GET_DATA_REQUEST,
		payload: null,
	}
}
const getDataSuccess = res => {
	return {
		type: constants.GET_DATA_SUCCESS,
		payload: res.data,
	}
}

const getDataError = () => {
	return {
		type: constants.GET_DATA_ERROR,
		payload: null,
	}
}

export const pushMessage = (type, message) => {
	return toast[type](message);
}
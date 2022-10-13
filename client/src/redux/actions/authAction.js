import { ActionTypes } from '../constants/action-types';
export const login = (data) => {
	console.log('payload', data);
	return {
		type: ActionTypes.LOG_IN,
		payload: data,
	};
};
console.log('action');
export const logout = (data) => {
	return {
		type: ActionTypes.LOG_OUT,
		payload: data,
	};
};
export const getCurrentUser = (data) => {
	console.log('currrentUser', data);
	return {
		type: ActionTypes.CURR_USER_DETAILS,
		payload: data,
	};
};

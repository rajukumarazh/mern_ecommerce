import { ActionTypes } from '../constants/action-types';
export const createUser = (data) => {
	console.log('signupcalled', data);
	return {
		type: ActionTypes.HANDLE_SIGNUP,
		payload: data,
	};
};

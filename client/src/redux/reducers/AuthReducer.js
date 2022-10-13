import { ActionTypes } from '../constants/action-types';
const initialState = { accessToken: '', currentUser: '' };
export const AuthReducer = (state = initialState, { type, payload }) => {
	console.log('curntuserAuthReducer', payload);
	switch (type) {
		case ActionTypes.LOG_IN:
			return {
				...state,
				email: payload.email,
				password: payload.password,
				accessToken: payload?.token,
			};
		case ActionTypes.CURR_USER_DETAILS:
			return {
				...state,
				currentUser: payload,
			};
		default:
			return state;
	}
};

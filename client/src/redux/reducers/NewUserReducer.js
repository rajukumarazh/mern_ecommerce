import { ActionTypes } from '../constants/action-types';
const initialState = {
	email: '',
	password: '',
	confirm_password: '',
	currentUser: [],
};
export const NewUserReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.HANDLE_SIGNUP:
			if (payload !== undefined) {
				console.log('signupdata', payload);
				return {
					...state,
					email: payload.email,
					password: payload.password,
					confirm_password: payload?.confirm_password,
				};
			}

		default:
			return state;
	}
};

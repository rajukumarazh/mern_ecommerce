import { ActionTypes } from '../constants/action-types';
let state = 1;
export const rederRedcr = (initialState = state, { type, payload }) => {
	switch (type) {
		case ActionTypes.RANDOM_RENDER:
			return {
				...state,
				state: payload,
			};
		default:
			return state;
	}
};

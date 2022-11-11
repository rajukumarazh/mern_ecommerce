import { ActionTypes } from '../constants/action-types';
export const decided = (data) => {
	return {
		type: ActionTypes.RANDOM_RENDER,
		payload: data,
	};
};

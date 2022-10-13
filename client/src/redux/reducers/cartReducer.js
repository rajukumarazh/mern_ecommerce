import { ActionTypes } from '../constants/action-types';

const initialState = {
	cart: [],
	payableAmount: [],
	paid: '',
};
export const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.ADD_TO_CART:
			let isContains = state.cart.some((eee) => eee.id === payload.id);
			if (isContains == false) {
				return { ...state, cart: [...state.cart, payload] };
			}

		default:
			return state;
		case ActionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart?.filter((item) => {
					if (item.id !== payload) {
						return item;
					}
				}),
			};
		case ActionTypes.RESET_CART_ONPAYMENT:
			return {
				cart: [],
			};
		case ActionTypes.MANIPULATE_QNTY:
			let incQuant = state.cart.map((curr) => {
				console.log('payload', payload);
				if (payload.id == curr.id) {
					return { ...curr, qty: payload.qty };
				} else {
					return { ...curr };
				}
			});
			return {
				...state,
				cart: incQuant,
			};
		case ActionTypes.SAFE_AMOUNT:
			return { ...state, payableAmount: payload };
		case ActionTypes.PAYMENT_SUCCESS:
			return { ...state, paid: payload };
	}
};

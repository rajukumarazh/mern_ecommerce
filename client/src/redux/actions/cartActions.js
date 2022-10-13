import { ActionTypes } from '../constants/action-types';
export const addToCart = (data) => {
	return {
		type: ActionTypes.ADD_TO_CART,
		payload: data,
	};
};
// export const setProducts = (products) => {
// 	return {
// 		type: ActionTypes.SET_PRODUCTS,
// 		payload: products,
// 	};
// };

export const removeFromCart = (currentData) => {
	return {
		type: ActionTypes.REMOVE_FROM_CART,
		payload: currentData,
	};
};
export const ManipulateQuantity = (id, qty) => {
	let data = { id: id, qty: qty };
	console.log('qtyActioned', data);
	return { type: ActionTypes.MANIPULATE_QNTY, payload: data };
};

export const resetCartOnPayment = () => {
	return {
		type: ActionTypes.RESET_CART_ONPAYMENT,
	};
};
export const proceedSafeAmount = (data) => {
	return {
		type: ActionTypes.SAFE_AMOUNT,
		payload: data,
	};
};
export const payment_Success = (data) => {
	return {
		type: ActionTypes.PAYMENT_SUCCESS,
		payload: data,
	};
};

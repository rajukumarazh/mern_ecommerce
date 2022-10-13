import { ActionTypes } from '../constants/action-types';

export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};

export const selectedProducts = (products) => {
	return {
		type: ActionTypes.SELECTED_PRODUCTS,
		payload: products,
	};
};

export const removeSelectedProducts = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
	};
};
export const searchProduct = (data) => {
	console.log('data', data.current);
	return {
		type: ActionTypes.SEARCH_ITEMS,
		payload: data.current,
	};
};
export const sortProduct2 = (cart) => {
	return {
		type: ActionTypes.LOW_TO_HIGH,

		payload: cart,
	};
};
export const sortProduct = (cart) => {
	console.log('allData', cart);
	return {
		type: ActionTypes.HIGH_TO_LOW,
		payload: cart,
	};
};
export const searchShirt = () => {
	return {
		type: ActionTypes.SEARCH_SHIRT,
	};
};
export const searchHeadphone = () => {
	console.log('headphone');
	return {
		type: ActionTypes.SEARCH_HEADPHONE,
	};
};
export const searchShoe = () => {
	return {
		type: ActionTypes.SEARCH_SHOE,
	};
};
export const viewProduct = (single) => {
	console.log('called', single);
	return { type: ActionTypes.VIEW_PRODUCT, payload: single };
};

// import { current } from "daisyui/src/colors";
// import { ActionTypes } from "../constants/action-types";
// const initialState = {
// 	fitleredItem: [],
// };
// export const FilteredReducer = (state = initialState, { type, payload }) => {
// 	console.log("filtered Reducer", payload);
// 	// let ar = payload.allData.map((cur) => {
// 	// 	console.log(cur.name);
// 	// });
// 	switch (type) {
// 		// case ActionTypes.SEARCH_ITEMS:
// 		// 	let ar = payload.allData.filter((cur) => {
// 		// 		if (cur.name.toLowerCase().includes(payload.current)) {
// 		// 			return cur;
// 		// 		}
// 		// 	});
// 		// 	return { ...state, fitleredItem: ar };

// 		case ActionTypes.HIGH_TO_LOW:
// 			let neee = payload?.sort((a, b) => {
// 				return b.price - a.price;
// 			});
// 			return { ...state, cart: neee };
// 		case ActionTypes.LOW_TO_HIGH:
// 			let AA = payload?.sort((a, b) => {
// 				return a.price - b.price;
// 			});
// 			return { ...state, cart: AA };
// 		default:
// 			return state;
// 		// case ActionTypes.REMOVE_FROM_CART:
// 		// 	return {
// 		// 		...state,
// 		// 		cart: state.cart.filter((item) => {
// 		// 			if (item.id !== payload) {
// 		// 				return item;
// 		// 			}
// 		// 		}),
// 		// 	};
// 	}
// };

import { combineReducers } from 'redux';
import {
	productReducer,
	selectedProductReducer,
} from '../reducers/productReducers';
import { cartReducer } from './cartReducer';
import { FilteredReducer } from './FilteredReducer';
import { AuthReducer } from './AuthReducer';
import { NewUserReducer } from './NewUserReducer';
import { rederRedcr } from './renderReducer';
const reducers = combineReducers({
	allProducts: productReducer,
	product: selectedProductReducer,
	cart: cartReducer,
	Filter: FilteredReducer,
	Auth: AuthReducer,
	signUp: NewUserReducer,
	render: rederRedcr,
});

export default reducers;

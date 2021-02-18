import { combineReducers } from 'redux';
import { viewReducer, addToCartReducer } from './reducer';
const allReducers = combineReducers({
	view: viewReducer,
	currentCart: addToCartReducer,
});

export default allReducers;

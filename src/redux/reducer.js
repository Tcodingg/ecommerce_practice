import { products } from '../Products';

export const viewReducer = (state = null, action) => {
	switch (action.type) {
		case 'VIEW_ITEM':
			const item = products.find((prod) => prod.id === action.payload.id);
			return item;
		default:
			return state;
	}
};
let initialVal = {
	cart: [],
	loadItem: null,
};
export const addToCartReducer = (state = initialVal, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			const item = products.find((item) => item.id === action.payload.id);
			const inCart = state.cart.find((check) =>
				check.id === action.payload.id ? true : false
			);
			return {
				...state,
				cart: inCart
					? state.cart.map((item) =>
							item.id === action.payload.id
								? { ...item, qnt: item.qnt + 1 }
								: item
					  )
					: [...state.cart, { ...item, qnt: 1 }],
			};

		case 'REMOVE_ITEM':
			let removeItem = action.payload.id;
			return {
				...state,
				cart: state.cart.filter((remove) => remove.id !== removeItem),
			};

		default:
			return state;
	}
};

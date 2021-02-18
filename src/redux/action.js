export const viewItem = (itemId) => {
	return {
		type: 'VIEW_ITEM',
		payload: {
			id: itemId,
		},
	};
};

export const addToCart = (itemId) => {
	return {
		type: 'ADD_TO_CART',
		payload: {
			id: itemId,
			qnt: 0,
		},
	};
};

export const removeItem = (itemId) => {
	return {
		type: 'REMOVE_ITEM',
		payload: {
			id: itemId,
		},
	};
};

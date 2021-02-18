import React from 'react';
import { products } from '../Products';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/action';
import './style.css';

export default function Cart() {
	const currentCart = useSelector((state) => state.currentCart);
	// const itemsRemoved = useSelector((state) => state.addToCart);
	const dispatch = useDispatch();
	// console.log(itemsRemoved);

	return (
		<div className='items-container'>
			{currentCart.cart.map((items) => {
				return (
					<div key={items.id} id={items.id} className='items'>
						<h4>{items.id}</h4>
						<h1>{items.name}</h1>
						<h4>{items.discription}</h4>
						<button
							className='remove'
							onClick={() => dispatch(removeItem(items.id))}
						>
							remove
						</button>
					</div>
				);
			})}
		</div>
	);
}

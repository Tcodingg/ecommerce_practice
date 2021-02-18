import React from 'react';
import { products } from '../Products';
import './style.css';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { viewItem } from '../redux/action';
import { addToCart } from '../redux/action';

export default function Home() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.currentCart);
	function handleView(itemId) {
		dispatch(viewItem(itemId));
		console.log(cart);
	}

	return (
		<div className='items-container'>
			{products.map((items) => {
				return (
					<div key={items.id} className='items'>
						<h1>{items.name}</h1>
						<h4>{items.discription}</h4>
						<button
							onClick={() => dispatch(addToCart(items.id))}
							className='addToCart'
						>
							add to cart
						</button>
						<Link to={`/detail/${items.id}`}>
							<button
								onClick={() => handleView(items.id)}
								className='addToCart'
							>
								view item
							</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

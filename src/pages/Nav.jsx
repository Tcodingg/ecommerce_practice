import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useSelector } from 'react-redux';

export default function Nav() {
	const currentCart = useSelector((state) => state.currentCart);
	const refCart = useRef('/cart');
	let numberOfItems = 0;
	currentCart.cart.forEach((item) => {
		numberOfItems += item.qnt;
	});

	console.log(numberOfItems);

	return (
		<div className='nav'>
			<button style={{ marginLeft: '30px' }} className='cart'>
				Cart({numberOfItems})
			</button>
			<ul>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/cart'>
					<li>Cart</li>
				</Link>
			</ul>
		</div>
	);
}

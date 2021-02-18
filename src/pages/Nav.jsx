import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useSelector } from 'react-redux';

export default function Nav() {
	const addToCart = useSelector((state) => state.currentCart);
	const refCart = useRef('/cart');
	// console.log(addToCart);

	return (
		<div className='nav'>
			<button style={{ marginLeft: '30px' }} className='cart'>
				Cart()
			</button>

			<ul>
				<Link to='/'>
					{' '}
					<li>Home</li>
				</Link>
				<Link to='/cart'>
					<li>Cart</li>
				</Link>
			</ul>
		</div>
	);
}

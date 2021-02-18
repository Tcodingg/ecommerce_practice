import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Nav() {
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

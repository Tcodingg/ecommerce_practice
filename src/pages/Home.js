import React from 'react';
import { products } from '../Products';
import './style.css';

export default function Home() {
	return (
		<div className='items-container'>
			{products.map((items) => {
				return (
					<div className='items'>
						<h1>{items.name}</h1>
						<h4>{items.discription}</h4>
						<button className='addToCart'>add to cart</button>
						<button className='remove'>remove</button>
					</div>
				);
			})}
		</div>
	);
}

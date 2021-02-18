import React from 'react';
import { products } from '../Products';
import './style.css';

export default function Cart() {
	return (
		<div className='items-container'>
			{products.map((items) => {
				return (
					<div className='items'>
						<h1>{items.name}</h1>
						<h4>{items.discription}</h4>
						<button className='remove'>remove</button>
					</div>
				);
			})}
		</div>
	);
}

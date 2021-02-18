import React from 'react';
import { products } from '../Products';

export default function ProductsMaker() {
	return (
		<div>
			{products.map((items) => {
				return (
					<div>
						<h1>{items.name}</h1>
						<h4>{items.discription}</h4>
					</div>
				);
			})}
		</div>
	);
}

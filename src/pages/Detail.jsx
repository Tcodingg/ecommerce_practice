import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { products } from '../Products';

export default function Detail({ match }) {
	// const item = useSelector((state) => state.view);
	let matchId = Number(match.params.id);

	const item = products.find((i) => {
		return i.id === matchId;
	});

	return (
		<div className='items'>
			<h1>{item.id}</h1>
			<h1>{item.name}</h1>
			<h4>{item.discription}</h4>
			<button className='addToCart'>add to cart</button>
		</div>
	);
}

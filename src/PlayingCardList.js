import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';
import { useAxios } from './hooks';
import PlayingCard from './PlayingCard';
import './PlayingCardList.css';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
	const [cards, setCards] = useState([]);

	const data = useAxios('https://deckofcardsapi.com/api/deck/new/draw/');

	const addCard = () => {
		setCards((cards) => {
			data.fetchData();
			return [...cards, { ...data.response, id: uuidv4() }];
		});
	};

	return (
		<div className='PlayingCardList'>
			<h3>Pick a card, any card!</h3>
			<div>
				<button onClick={addCard}>Add a playing card!</button>
			</div>
			<div className='PlayingCardList-card-area'>
				{cards.map((cardData) => (
					<PlayingCard
						key={cardData.id}
						front={cardData.cards[0].image}
					/>
				))}
			</div>
		</div>
	);
}

CardTable.defaultProps = {};

export default CardTable;

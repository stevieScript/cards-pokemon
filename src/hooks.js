import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom hook to handle card flipping logic
const useFlip = () => {
	const [isFacingUp, setIsFacingUp] = useState(true);
	const flipCard = () => {
		setIsFacingUp((isUp) => !isUp);
	};
	return [isFacingUp, flipCard];
};

// Custome hook to handle axios requests based on the logic below
// const addCard = async () => {
// 		const response = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/');
// 		setCards((cards) => [...cards, { ...response.data, id: uuidv4() }]);
// 	};

const useAxios = (url) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(url);
				setResponse(res.data);
			} catch (error) {
				setError(error);
			}
		};
		setIsLoading(false);
		fetchData();
	}, [url]);
	console.log(response);
	return { response, error, isLoading };
};

export { useFlip, useAxios };

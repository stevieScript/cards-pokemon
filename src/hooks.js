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

const useAxios = (url) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		try {
			const res = await axios.get(url);
			setResponse(res.data);
		} catch (error) {
			setError(error);
		}
	};
	useEffect(() => {
		setIsLoading(false);
		fetchData();
	}, [url]);
	console.log(response);
	return { response, error, isLoading, fetchData };
};

export { useFlip, useAxios };

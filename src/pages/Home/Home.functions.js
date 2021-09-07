import { useState } from 'react';
import axios from 'axios';

const HomeFn = ({ setSearchRes }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [cancelToken, setCancelToken] = useState(null);

	const errorMessages = {
		newRequest: 'New request',
		notFound: 'Superhero not found',
	};

	const searchHeroes = async (heroName) => {
		setIsError(false);

		if (cancelToken) {
			cancelToken.cancel(errorMessages.newRequest);
		}

		if (heroName.length > 2) {
			setIsLoading(true);

			const source = axios.CancelToken.source();
			setCancelToken(source);

			try {
				const { data } = await axios.get(
					`https://superheroapi.com/api.php/1525842291092605/search/${heroName}`,
					{ cancelToken: source.token }
				);

				if (data.response === 'success') {
					setSearchRes(data.results);
				} else {
					throw new Error(errorMessages.notFound);
				}
			} catch (error) {
				if (error.message !== 'New request') {
					setIsError(true);
					setSearchRes(null);
				}
			}
			setIsLoading(false);
		} else {
			setSearchRes(null);
			setCancelToken(null);
		}
	};

	return { isLoading, isError, searchHeroes };
};

export default HomeFn;

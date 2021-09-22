import { useState } from 'react';
import axios from 'axios';

const HeroSearchFn = ({ searchRes, setSearchRes, heroList, setHeroList }) => {
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

	const alreadyExists = (id) =>
		heroList.some((character) => character.id === id);
	const isHero = (alignment) => alignment === 'good';
	const isVillain = (alignment) => alignment === 'bad';
	const isNeutral = (alignment) => alignment === 'neutral';

	const addHero = (id, biography) => {
		if (!alreadyExists(id)) {
			const heroes = heroList.filter((hero) =>
				isHero(hero.biography.alignment)
			);
			const villains = heroList.filter((hero) =>
				isVillain(hero.biography.alignment)
			);
			const neutrals = heroList.filter((hero) =>
				isNeutral(hero.biography.alignment)
			);

			if (
				(isHero(biography.alignment) && heroes.length < 3) ||
				(isVillain(biography.alignment) && villains.length < 3) ||
				(isNeutral(biography.alignment) && neutrals.length < 3)
			) {
				setHeroList([
					...heroList,
					searchRes.find((hero) => hero.id === id),
				]);
			} else if (isHero(biography.alignment)) {
				alert('Too many heroes!');
			} else if (isVillain(biography.alignment)) {
				alert('Too many villains!');
			} else {
				alert('Too many neutrals!');
			}
		} else {
			alert('This hero already exists!');
		}
	};

	return { isLoading, isError, searchHeroes, addHero };
};

export default HeroSearchFn;

import axios from 'axios';

export const getSuperHero = async () => {
	try {
		const { data } = await axios(
			'https://superheroapi.com/api.php/1525842291092605/1/'
		);

		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

export const getList = () => {};

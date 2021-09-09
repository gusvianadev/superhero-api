import { useState } from 'react';
import axios from 'axios';

const HomeFn = ({ heroList, setHeightAndWeight, setTotalStats }) => {
	const getTotalStats = () => {
		const newStats = {
			combat: 0,
			durability: 0,
			intelligence: 0,
			power: 0,
			speed: 0,
			strength: 0,
		};

		const newHeightAndWeight = {
			height: 0,
			weight: 0,
		};

		heroList.forEach(({ powerstats, appearance }, i) => {
			const heroH = parseInt(appearance.height[1].split(' ')[0], 10);
			const heroW = parseInt(appearance.weight[1].split(' ')[0], 10);

			Object.entries(powerstats).forEach(
				(entry) => (newStats[entry[0]] += parseInt(entry[1], 10) || 0)
			);

			newHeightAndWeight.height =
				(newHeightAndWeight.height + heroH) / (i + 1);
			newHeightAndWeight.weight =
				(newHeightAndWeight.weight + heroW) / (i + 1);
		});

		setHeightAndWeight(newHeightAndWeight);
		setTotalStats(newStats);
	};

	return { getTotalStats };
};

export default HomeFn;

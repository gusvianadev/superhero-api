const HomeFn = ({
	heroList,
	setHeightAndWeight,
	setTotalStats,
	totalStats,
}) => {
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

		heroList.forEach(({ powerstats, appearance }) => {
			const heroH = parseInt(appearance.height[1].split(' ')[0], 10);
			const heroW = parseInt(appearance.weight[1].split(' ')[0], 10);

			Object.entries(powerstats).forEach(
				(entry) => (newStats[entry[0]] += parseInt(entry[1], 10) || 0)
			);

			// accumulate all height and weight
			newHeightAndWeight.height += heroH;
			newHeightAndWeight.weight += heroW;
		});

		// calculate the average
		newHeightAndWeight.height /= heroList.length;
		newHeightAndWeight.weight /= heroList.length;

		setHeightAndWeight(newHeightAndWeight);
		setTotalStats(newStats);
	};

	const getTeamType = () => {
		const teamStatsEntries = Object.entries(totalStats);
		const highestStat = {
			name: '',
			val: 0,
		};

		teamStatsEntries.forEach((entry) => {
			if (entry[1] > highestStat.val) {
				[highestStat.name, highestStat.val] = entry;
			}
		});

		return highestStat.name;
	};
	return { getTotalStats, getTeamType };
};

export default HomeFn;

import HeroesTableSty from './HeroesTable.styles';

const HeroesTable = () => {
	console.log('heroes!');
	return (
		<HeroesTableSty className="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">sprite</th>
					<th scope="col">stats</th>
					<th scope="col">actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>
						<img
							src="https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
							alt="hero"
						/>
					</td>
					<td>64, 80, 38, 24, 17, 100</td>
					<td>det, del</td>
				</tr>
			</tbody>
		</HeroesTableSty>
	);
};

export default HeroesTable;

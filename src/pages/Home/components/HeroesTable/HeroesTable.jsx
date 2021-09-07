import { Button } from 'react-bootstrap';
import { FaSearch, FaTrashAlt } from 'react-icons/fa';
import HeroesTableSty from './HeroesTable.styles';

const HeroesTable = ({ heroList, setHeroList }) => (
	<HeroesTableSty>
		<thead>
			<tr>
				<th scope="col">name</th>
				<th scope="col">sprite</th>
				<th scope="col">stats</th>
				<th scope="col">actions</th>
			</tr>
		</thead>
		<tbody>
			{heroList &&
				heroList.map(({ id, name, image, powerstats }) => (
					<tr key={`table item for hero with id ${id}`}>
						<th scope="row">{name}</th>
						<td className="table__sprite">
							<img
								src={image.url}
								alt={`hero list item for ${name}`}
							/>
						</td>
						<td>
							{Object.values(powerstats).map((stat) =>
								stat !== 'null' ? `${stat}, ` : 'unknown, '
							)}
						</td>
						<td>
							<Button>
								<FaSearch />
							</Button>
							<Button
								variant="danger"
								onClick={() =>
									setHeroList(
										heroList.filter(
											(hero) => hero.id !== id
										)
									)
								}
							>
								<FaTrashAlt />
							</Button>
						</td>
					</tr>
				))}
		</tbody>
	</HeroesTableSty>
);

export default HeroesTable;

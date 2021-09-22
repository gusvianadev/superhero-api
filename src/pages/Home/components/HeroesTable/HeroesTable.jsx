import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaSearch, FaTrashAlt } from 'react-icons/fa';
import HeroDetailsModal from './HeroDetailsModal/HeroDetailsModal';
import HeroesTableSty from './HeroesTable.styles';

const HeroesTable = ({ heroList, setHeroList }) => {
	const [showModal, setShowModal] = useState(false);
	const [heroDetails, setHeroDetails] = useState(null);
	const handleShowModal = (details) => {
		setShowModal(true);
		setHeroDetails(details);
	};
	const handleCloseModal = () => {
		setShowModal(false);
		setHeroDetails(null);
	};

	return (
		<HeroesTableSty>
			{heroDetails && (
				<HeroDetailsModal
					showModal={showModal}
					heroDetails={heroDetails}
					handleCloseModal={handleCloseModal}
				/>
			)}
			<thead>
				<tr className="text-capitalize">
					<th scope="col">name</th>
					<th scope="col">sprite</th>
					<th scope="col">stats</th>
					<th scope="col">actions</th>
				</tr>
			</thead>
			<tbody>
				{heroList &&
					heroList.map(
						({ id, name, image, powerstats, biography }, i) => (
							<tr
								key={`table item for hero with id ${id}`}
								className={biography.alignment}
							>
								<th scope="row">{name}</th>
								<td className="table__sprite">
									<img
										src={image.url}
										alt={`hero list item for ${name}`}
									/>
								</td>
								<td className="text-uppercase">
									{Object.entries(powerstats).map((stat) =>
										stat !== 'null'
											? `${stat[0].slice(0, 3)}: ${
													stat[1]
											  }, `
											: 'unknown, '
									)}
								</td>
								<td>
									<Button
										onClick={() => {
											handleShowModal(heroList[i]);
										}}
									>
										<FaSearch />
									</Button>
									<Button
										variant="secondary"
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
						)
					)}
			</tbody>
		</HeroesTableSty>
	);
};
export default HeroesTable;

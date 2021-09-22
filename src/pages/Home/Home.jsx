import { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import HeroesTable from './components/HeroesTable/HeroesTable';
import HeroesSearch from './components/HeroesSearch/HeroesSearch';
import Chart from '../../components/Chart/Chart';
import HomeFn from './Home.functions';

const Home = () => {
	const [heroList, setHeroList] = useState([]);
	const [totalStats, setTotalStats] = useState({});
	const [heightAndWeight, setHeightAndWeight] = useState({
		height: 0,
		weight: 0,
	});
	const { getTotalStats, getTeamType } = HomeFn({
		heroList,
		setHeightAndWeight,
		setTotalStats,
		totalStats,
	});

	useEffect(() => {
		if (heroList.length > 0) {
			getTotalStats();
		}
	}, [heroList]);

	return (
		<Container fluid id="home-container">
			<Row>
				<Col md={{ span: 4, order: 'last' }}>
					<Card className="my-2 bg-secondary">
						<Card.Body className="text-center text-uppercase">
							{getTeamType() || 'Select a hero'}
						</Card.Body>
						<Card.Body className="d-flex justify-content-between">
							Height:
							<span>
								{heightAndWeight.height.toFixed(1)}
								cm
							</span>
						</Card.Body>
						<Card.Body className="d-flex justify-content-between">
							Weight:
							<span>
								{heightAndWeight.weight.toFixed(1)}
								kg
							</span>
						</Card.Body>
						<Card.Body>
							<Chart
								id="team-powerstats"
								values={totalStats}
								max={600}
								bgClr="#ffffff"
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col md={{ span: 8, order: 'first' }}>
					<HeroesSearch
						heroList={heroList}
						setHeroList={setHeroList}
					/>
					<HeroesTable
						heroList={heroList}
						setHeroList={setHeroList}
					/>
				</Col>
			</Row>
		</Container>
	);
};
export default Home;

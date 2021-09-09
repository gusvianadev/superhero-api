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
	const { getTotalStats } = HomeFn({
		heroList,
		setHeightAndWeight,
		setTotalStats,
	});

	useEffect(() => {
		getTotalStats(heroList, setHeightAndWeight, setTotalStats);
	}, [heroList]);

	return (
		<Container fluid>
			<Row>
				<Col sm={{ span: 4, order: 'last' }}>
					<Card className="my-2 bg-secondary">
						<Card.Body>Strong</Card.Body>
						<Card.Body>
							Average Height: {heightAndWeight.height.toFixed(1)}
							cm
						</Card.Body>
						<Card.Body>
							Average Weight: {heightAndWeight.weight.toFixed(1)}
							kg
						</Card.Body>
					</Card>
					<Chart
						id="team-powerstats"
						values={totalStats}
						max={600}
						bgClr="#ffffff"
					/>
				</Col>
				<Col sm={{ span: 8, order: 'first' }}>
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

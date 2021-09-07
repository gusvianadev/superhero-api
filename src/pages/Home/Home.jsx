import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { powerstats } from './Home.vars';
import HeroesTable from './components/HeroesTable/HeroesTable';
import HeroesSearch from './components/HeroesSearch/HeroesSearch';
import Chart from '../../components/Chart/Chart';

const Home = () => {
	const [heroList, setHeroList] = useState([]);

	return (
		<Container fluid>
			<Row>
				<Col sm={{ span: 4, order: 'last' }}>
					<Card className="my-2 bg-secondary">
						<Card.Body>Strong</Card.Body>
						<Card.Body>height</Card.Body>
						<Card.Body>weight</Card.Body>
					</Card>
					<Chart
						id="team-powerstats"
						values={powerstats}
						max={600}
						bgClr="white"
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

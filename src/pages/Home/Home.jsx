import HeroesTable from './components/HeroesTable/HeroesTable';
import TeamStats from './components/TeamStats/TeamStats';

const Home = () => {
	console.log('Home!');
	return (
		<div className="container-fluid">
			<div className="row d-flex flex-row-reverse">
				<div className="col">
					<TeamStats />
				</div>
				<div className="col">
					<input type="text" />
					<button type="submit">search</button>
					<HeroesTable />
				</div>
			</div>
		</div>
	);
};

export default Home;

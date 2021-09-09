import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Global.styles';
import { dark, light } from './styles/themes';
import AppSty from './App.styles';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const App = () => (
	<ThemeProvider theme={dark}>
		<AppSty>
			<GlobalStyles />
			<Router>
				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</AppSty>
	</ThemeProvider>
);

export default App;

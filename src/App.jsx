import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Global.styles';
import { dark } from './styles/themes';
import AppSty from './App.styles';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const App = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('superHeroLoginToken')) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, [isLogged]);

    return (
        <ThemeProvider theme={dark}>
            <AppSty>
                <GlobalStyles />
                {isLogged ? <Home /> : <Login setIsLogged={setIsLogged} />}
            </AppSty>
        </ThemeProvider>
    );
};
export default App;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    *, 
    *:before, 
    *:after {
        box-sizing: inherit;
    }

    body,
    #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	img {
		width: 100%;
		height: auto;
	}
}
`;

export default GlobalStyles;

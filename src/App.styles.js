import styled from 'styled-components';

const AppSty = styled.div`
	background-color: ${({ theme }) => theme.clrBackground};
	color: ${({ theme }) => theme.clrContrast};
	font-family: ${({ theme }) => theme.fontFamily};
	height: 100%;
	width: 100%;

	img {
		width: 100%;
		height: auto;
	}
`;

export default AppSty;

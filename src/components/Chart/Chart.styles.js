import styled from 'styled-components';

export const ChartSty = styled.div`
	background-color: ${({ $bgClr }) => $bgClr};

	& .chart__bars__container {
		height: 10rem;
	}
`;

export const ChartBarSty = styled.div`
	background-color: ${({ theme, $name }) => theme[`clr__${$name}`]};
	height: ${({ $height }) => `${$height}%`};
	transition: all 0.5s ease;
	width: 13%;
`;

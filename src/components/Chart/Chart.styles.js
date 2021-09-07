import styled from 'styled-components';

export const ChartSty = styled.div`
	background-color: ${({ $bgClr }) => $bgClr};

	& .chart__bars__container {
		height: 10rem;
	}
`;

export const ChartBarSty = styled.div`
	background-color: ${({ $barClr }) => $barClr};
	height: ${({ $height }) => `${$height}%`};
	width: 13%;
`;

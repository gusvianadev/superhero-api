import styled from 'styled-components';

const SearchResSty = styled.div`
	background-color: ${({ theme }) => theme.clrBackground_L_1};
	max-height: 10rem;
	overflow-y: auto;
	transform: translateY(3rem);
	width: 100%;

	& .search-result__item {
		padding: 0.2rem;

		:hover {
			background-color: ${({ theme }) => theme.clrBackground_L_2};
		}
	}
	& img {
		max-width: 2rem;
	}
`;

export default SearchResSty;

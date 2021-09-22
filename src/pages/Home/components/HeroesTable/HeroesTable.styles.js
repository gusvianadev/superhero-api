import { Table } from 'react-bootstrap';
import styled from 'styled-components';

const HeroesTableSty = styled(Table)`
	color: inherit;

	.table__sprite {
		width: 30px;
	}

	.good {
		background-color: ${({ theme }) => theme.clr__good};
	}

	.bad {
		background-color: ${({ theme }) => theme.clr__bad};
	}

	.neutral {
		background-color: ${({ theme }) => theme.clr__neutral};
	}
`;

export default HeroesTableSty;

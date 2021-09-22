import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const LoginSty = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
`;

export const FormSty = styled(Form)`
	background-color: ${({ theme }) => theme.clrBackground_L_2};
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: 6rem 3rem;

	button {
		margin: 0.7rem auto;
		width: 100%;
	}
`;

export const FieldSty = styled(Field)`
	display: block;
	margin: 0.7rem auto;
`;

export const ErrorMessageSty = styled(ErrorMessage)`
	background-color: red;
`;

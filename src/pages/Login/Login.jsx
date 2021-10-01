import { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { LoginSty, FormSty, FieldSty, ErrorMessageSty } from './Login.styles';

const Login = ({ setIsLogged }) => {
	const [loginErr, setLoginErr] = useState(false);

	return (
		<LoginSty>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={(values) => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
							values.email
						)
					) {
						errors.email = 'Invalid email address';
					}
					return errors;
				}}
				onSubmit={async (values, { setSubmitting }) => {
					try {
						const res = await axios({
							method: 'post',
							url: 'http://challenge-react.alkemy.org/',
							data: values,
						});
						localStorage.setItem(
							'superHeroLoginToken',
							res.data.token
						);
						setIsLogged(true);
					} catch (err) {
						setLoginErr(true);
					}
					setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<FormSty>
						<FieldSty
							type="email"
							name="email"
							placeholder="Enter email..."
						/>
						<ErrorMessageSty name="email" component="div" />
						<FieldSty
							type="password"
							name="password"
							placeholder="Enter password..."
						/>
						<ErrorMessageSty name="password" component="div" />
						<Button
							variant="success"
							type="submit"
							disabled={isSubmitting}
						>
							Submit
						</Button>
						{loginErr && (
							<div>Wrong user or password, please try again.</div>
						)}
					</FormSty>
				)}
			</Formik>
		</LoginSty>
	);
};

export default Login;

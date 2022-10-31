import { Pressable, Text, TextInput, View } from 'react-native';
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import theme from '../theme';

const initialValues = {
	username: '',
	password: ''
};

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required'),
	password: yup
		.string()
		.required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
	const [usernameField, usernameMeta, usernameHelper] = useField('username');
	const [passwordField, passwordMeta, passwordHelper] = useField('password');
	const showUsernameError = usernameMeta.touched && usernameMeta.error;
	const showPasswordError = passwordMeta.touched && passwordMeta.error;

	return (
		<View style={ styles.container }>
			<View style={ styles.inputContainer }>
				<TextInput value={ usernameField.value } placeholder="Username"
						   style={ showUsernameError ? styles.errorInput : styles.input }
						   placeholderTextColor="#888686" autoCapitalize={ 'none' }
						   onChangeText={ text => usernameHelper.setValue(text) }
						   onBlur={ () => usernameHelper.setTouched(true) }/>
				{ showUsernameError && <Text style={ styles.errorMessage }>{ usernameMeta.error }</Text> }
			</View>

			<View style={ styles.inputContainer }>
				<TextInput value={ passwordField.value } placeholder="Password"
						   style={ showPasswordError ? styles.errorInput : styles.input }
						   placeholderTextColor="#888686" secureTextEntry={ true } autoCapitalize={ 'none' }
						   onChangeText={ text => passwordHelper.setValue(text) }
						   onBlur={ () => passwordHelper.setTouched(true) }/>
				{ showPasswordError && <Text style={ styles.errorMessage }>{ passwordMeta.error }</Text> }
			</View>

			<Pressable onPress={ onSubmit } style={ styles.button }>
				<Text style={ styles.buttonText }>Sign In</Text>
			</Pressable>
		</View>
	);
};

const SignIn = () => {
	const onSubmit = values => {
		console.log(values);
	};

	return (
		<Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={ validationSchema }>
			{ ({ handleSubmit }) => <SignInForm onSubmit={ handleSubmit }/> }
		</Formik>
	);
};

export default SignIn;

const styles = {
	container: {
		backgroundColor: 'white',
		padding: 15,
	},
	inputContainer: {
		marginBottom: 20,
	},
	input: {
		padding: 15,
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 5,
	},
	errorInput: {
		padding: 15,
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 5,
		borderColor: '#d52525',
	},
	button: {
		backgroundColor: '#00bfff',
		borderRadius: 5,
	},
	buttonText: {
		fontFamily: theme.fonts.main,
		color: 'white',
		fontWeight: theme.fontWeights.bold,
		padding: 15,
		textAlign: 'center',
	},
	errorMessage: {
		marginTop: 5,
		color: '#d52525',
	}
};
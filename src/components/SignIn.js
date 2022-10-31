import { Pressable, Text, TextInput, View } from 'react-native';
import { Formik, useField } from 'formik';
import theme from '../theme';

const initialValues = {
	username: '',
	password: ''
};

const styles = {
	container: {
		backgroundColor: 'white',
		padding: 15,
	},
	input: {
		marginBottom: 15,
		padding: 15,
		borderWidth: 1,
		borderColor: '#888686',
		borderStyle: 'solid',
		borderRadius: 5,
	},
	button: {
		backgroundColor: '#00bfff',
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		fontWeight: theme.fontWeights.bold,
		padding: 15,
		textAlign: 'center',
	}
};

const SignInForm = ({ onSubmit }) => {
	const [usernameField, usernameMeta, usernameHelper] = useField('username');
	const [passwordField, passwordMeta, passwordHelper] = useField('password');
	const showUsernameError = usernameMeta.touched && usernameMeta.error;
	const showPasswordError = passwordMeta.touched && passwordMeta.error;

	return (
		<View style={ styles.container }>
			{ showUsernameError && <Text>{ usernameMeta.error }</Text> }
			<TextInput value={ usernameField.value } placeholder="Username" style={ styles.input }
					   placeholderTextColor="#888686" autoCapitalize={ 'none' }
					   onChangeText={ text => usernameHelper.setValue(text) }/>
			{ showPasswordError && <Text>{ passwordMeta.error }</Text> }
			<TextInput value={ passwordField.value } placeholder="Password" style={ styles.input }
					   placeholderTextColor="#888686" secureTextEntry={ true } autoCapitalize={ 'none' }
					   onChangeText={ text => passwordHelper.setValue(text) }/>
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
		<Formik initialValues={ initialValues } onSubmit={ onSubmit }>
			{ ({ handleSubmit }) => <SignInForm onSubmit={ handleSubmit }/> }
		</Formik>
	);
};

export default SignIn;
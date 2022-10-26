import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './Appbar';
import theme from '../theme';
import { Navigate, Route, Routes } from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.color.colorTertiary,
		flexGrow: 1,
		flexShrink: 1,
	},
});

const Main = () => {
	return (
		<View style={ styles.container }>
			<AppBar/>
			<Routes>
				<Route path="/" element={ <RepositoryList/> } exact/>
				<Route path="/login" element={ <SignIn/> } exact/>
				<Route path="*" element={ <Navigate to="/" replace/> }/>
			</Routes>
		</View>
	);
};

export default Main;
// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './Appbar';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e1e4e8',
		flexGrow: 1,
		flexShrink: 1,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar/>
			{/*<Text>Rate Repository Application</Text>*/}
			<RepositoryList/>
		</View>
	);
};

export default Main;
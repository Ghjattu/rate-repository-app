import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './Appbar';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.color.colorTertiary,
		flexGrow: 1,
		flexShrink: 1,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar/>
			<RepositoryList/>
		</View>
	);
};

export default Main;
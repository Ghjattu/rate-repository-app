import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		paddingBottom: Constants.statusBarHeight,
		paddingLeft: 10,
		backgroundColor: theme.color.colorSecondary,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	tab: {
		color: 'white',
		fontWeight: theme.fontWeights.bold,
		paddingRight: 15,
	}
});

const AppBar = () => {
	return (
		<View style={ styles.container }>
			<ScrollView horizontal={ true }>
				<Pressable>
					<Link to="/"><Text style={ styles.tab }>Repositories</Text></Link>
				</Pressable>
				<Pressable>
					<Link to="/login"><Text style={ styles.tab }>Sign In</Text></Link>
				</Pressable>
			</ScrollView>
		</View>
	);
};

export default AppBar;
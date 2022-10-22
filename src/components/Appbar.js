import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.color.colorSecondary,
		height: 50,
		justifyContent: 'center',
	},
	textColor: {
		color: 'white',
		fontWeight: theme.fontWeights.bold
	}
});

const AppBar = () => {
	return (
		<View style={ styles.container }>
			<Pressable>
				<Text style={ styles.textColor }>Repositories</Text>
			</Pressable>
		</View>
	);
};

export default AppBar;
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.color.colorPrimary,
		height: 50,
		justifyContent: 'center',
		// ...
	},
	textColor: {
		color: theme.color.textColorSecondary
	}
	// ...
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
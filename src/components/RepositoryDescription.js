import { Text, View } from 'react-native';
import theme from '../theme';

const styles = {
	container: {
		marginLeft: 15,
		marginRight: 15,
	},
	name: {
		fontWeight: theme.fontWeights.bold
	},
	description: {
		color: theme.color.textColorSecondary,
		marginTop: 6,
	},
	language: {
		marginTop: 8,
		padding: 5,
		backgroundColor: theme.color.colorPrimary,
		color: 'white',
		alignSelf: 'flex-start'
	}
};

const RepositoryDescription = ({ item }) => {
	return (
		<View style={ styles.container }>
			<Text style={ styles.name }>{ item.fullName }</Text>
			<Text style={ styles.description }>{ item.description }</Text>
			<Text style={ styles.language }>{ item.language }</Text>
		</View>
	);
};

export default RepositoryDescription;
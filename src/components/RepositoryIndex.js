import { Text, View } from 'react-native';
import theme from '../theme';

const styles = {
	container: {
		flexDirection: 'row',
		marginTop: 15,
		justifyContent: 'center'
	},
	item: {
		alignItems: 'center',
		paddingLeft: 20,
		paddingRight: 20
	}
};

const Item = ({ index, number }) => {
	if (number >= 1000) {
		if (number % 1000 === 0)
			number /= 1000;
		else
			number = Math.round(number / 100) / 10;
		number = number + 'k';
	}

	return (
		<View style={ styles.item }>
			<Text style={ { paddingBottom: 7 } }>{ number }</Text>
			<Text style={ { color: theme.color.textColorSecondary } }>{ index }</Text>
		</View>
	);
};

const RepositoryIndex = ({ item }) => {
	return (
		<View style={ styles.container }>
			<Item index="Stars" number={ item.stargazersCount }/>
			<Item index="Forks" number={ item.forksCount }/>
			<Item index="Reviews" number={ item.reviewCount }/>
			<Item index="Rating" number={ item.ratingAverage }/>
		</View>
	);
};

export default RepositoryIndex;
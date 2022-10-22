import { StyleSheet, View } from 'react-native';
import RepositoryOwner from './RepositoryOwner';
import RepositoryDescription from './RepositoryDescription';
import RepositoryIndex from './RepositoryIndex';

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 15,
	},
});

const RepositoryItem = ({ item }) => {
	return (
		<View style={ styles.container }>
			<View style={ { flexDirection: 'row' } }>
				<RepositoryOwner item={ item }></RepositoryOwner>
				<RepositoryDescription item={ item }></RepositoryDescription>
			</View>
			<RepositoryIndex item={item}/>
		</View>
	);
};

export default RepositoryItem;
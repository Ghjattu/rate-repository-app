import { Image, View } from 'react-native';

const styles = {
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 5,
	}
};

const RepositoryOwner = ({ item }) => {
	return (
		<View>
			<Image source={ { uri: item.ownerAvatarUrl } } style={ styles.avatar }/>
		</View>
	);
};

export default RepositoryOwner;
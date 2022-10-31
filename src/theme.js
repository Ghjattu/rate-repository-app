import { Platform } from 'react-native';

const theme = {
	color: {
		textColorPrimary: 'black',
		textColorSecondary: '#535356',
		colorPrimary: '#0366d6',
		colorSecondary: '#24292e',
		colorTertiary: '#e1e4e8',
	},
	fontWeights: {
		normal: '400',
		bold: '700',
	},
	fonts: {
		main: Platform.select({
			android: 'Roboto',
			ios: 'Arial',
			default: 'System'
		})
	}
};

export default theme;
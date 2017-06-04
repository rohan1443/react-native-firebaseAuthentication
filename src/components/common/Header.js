import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ headerValue }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle} >{headerValue}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
	viewStyle: {
		backgroundColor: '#F8F8F8',
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	}
};

export { Header };

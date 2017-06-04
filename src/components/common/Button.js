import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Button = ({ buttonName, onPress }) => {
const { buttonStyle, clickTextStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={clickTextStyle}>{buttonName}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  clickTextStyle: {
    fontWeight: '600',
    fontSize: 15,
    alignSelf: 'center',
    color: '#000'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    padding: 3,
    borderColor: '#ccc'
  }
}
export { Button }; 
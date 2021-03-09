import React from 'react';
import {Text, Platform} from 'react-native';

const platform = Platform.OS;

const fontConfig = {
  android: {
    light: {
      fontFamily: 'SFProText-Light',
    },
    regular: {
      fontFamily: 'SFProText-Regular',
    },
    medium: {
      fontFamily: 'SFProText-Semibold',
    },
    bold: {
      fontFamily: 'SFProText-Heavy',
    },
  },
  ios: {
    light: {
      fontWeight: '300',
    },
    regular: {
      fontWeight: '400',
    },
    medium: {
      fontWeight: '500',
    },
    bold: {
      fontWeight: '700',
    },
  },
};
const RNTextView = ({children, style, textType, props}) => {
  let textStyle = {};
  switch (textType) {
    case 'light':
      textStyle = fontConfig[platform].light;
      break;
    case 'medium':
      textStyle = fontConfig[platform].medium;
      break;
    case 'bold':
      textStyle = fontConfig[platform].bold;
      break;
    default:
      textStyle = fontConfig[platform].regular;
      break;
  }
  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default RNTextView;

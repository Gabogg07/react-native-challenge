import * as React from 'react';
import { Image } from 'react-native';

export default function Logo({width, height}) {
  return <Image style={{ width: width || 60, height: height || 50 }} source={require('../../assets/logo.png')} />;
}

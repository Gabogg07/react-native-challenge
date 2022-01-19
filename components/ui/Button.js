import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import {Colors} from '../../constants/colors'

function Button({onPress, style, textStyle, text}) {
  return (
      <TouchableWithoutFeedback 
        onPress={onPress} 
      >
        <View style={[styles.button, style]} >
          <Text style={[styles.textButton, textStyle]}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  textButton:{
    color:'white'
  },
  button:{
    backgroundColor: Colors.standardBlue,
    height:40,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
  },
});

export default Button;
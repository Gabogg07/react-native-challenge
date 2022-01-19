import React from 'react';
import { StyleSheet, View } from 'react-native';


function Container({children, style}) {
  return (
    <View style={[styles.container, style]}>
        {children}
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:20,
        paddingVertical:20
    },
});

export default Container;
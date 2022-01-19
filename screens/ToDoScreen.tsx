import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import {Colors} from '../constants/colors'
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';


function HomeScreen({ navigation }) {
  return (
    <Container style={styles.container}>
      <View style={styles.segment}>
        <Image style={styles.illustration} source={require('../assets/home-illustration.png')} />
        <Text style={styles.title}>Howdy partner!</Text>
      </View>
      <View style={styles.segment}>
        <Text style={styles.text}>This is your assignment.</Text>
        <Text style={styles.text}>Follow the instructions on the Readme file.</Text>
      </View>
      <View style={styles.segment}>
        <Text style={styles.text}>Don’t worry, it’s easy! You should have the app looking smooth in no time.</Text>
      </View>
      <Button
        text='Get Started'
        onPress={()=>navigation.navigate('Home')}
        style={styles.button}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
  },
  illustration: {
    width: 256,
    height: 256,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text:{
    textAlign:'center'
  },
  segment:{
    marginVertical:5
  },
  button:{
    marginTop:40
  },
});

export default HomeScreen;
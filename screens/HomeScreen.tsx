import React, {useState, useContext} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../components/ui/Button'
import Container from '../components/ui/Container';
import {Context} from '../context/Context'
/* 
  Implement form using any user/pass combination 
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/
export default function HomeScreen({navigation}) {
  // getSecureItem
  const {
    setUsername,
    getCredentials,
    setCredentials,
  } = useContext(Context)


  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const validateLogin = async () => {
    const prevCredentials = await getCredentials();
    if(prevCredentials){
      if(prevCredentials.username === name && prevCredentials.password === password){
        setUsername(name)
        navigation.navigate('List')
      }else{
        alert('Wrong username or password. Remember it is the first used credentials')
      }
    } else {
      setCredentials({
        username: name, 
        password: password
      })
      navigation.navigate('List')
    }
  }

  
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text></Text>
      <TextInput style={styles.input} 
        placeholderTextColor='grey' 
        placeholder={`Enter your name`}
        textAlign='left'
        onChangeText={(val)=>setName(val)}
      />
      <TextInput style={styles.input} 
        placeholder="Enter your passowrd" 
        placeholderTextColor='grey' 
        textAlign='left'
        secureTextEntry = {true}
        onChangeText={(val)=>setPassword(val)}
      />
      <Button text="Sign in" onPress={validateLogin} style={styles.button}/>
      
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'flex-start',
    paddingTop:100
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input:{ 
    height: 40, 
    width:'100%', 
    borderColor:'lightgrey', 
    paddingHorizontal:15, 
    borderWidth:1,
    borderRadius:5,
    marginVertical:5
  },
  button:{
    marginTop:40
  },
});

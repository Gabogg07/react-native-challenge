import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import {Colors} from '../constants/colors'
import { moneyFormater } from '../constants/moneyFormater';
import Button from '../components/ui/Button';
/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets/{id}
 * API Example: https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

export default function ListScreen({navigation, route}) {
  /* ToDo: Get the id param from the route */
  const id = 'bitcoin';
  const {item} = route.params


  const changePercent = (value)=>{
    const isPositive = value >= 0
    return (
        <View 
            style={[styles.percentageBubble,{
                backgroundColor: isPositive ? Colors.green : Colors.red,
            }]}
        > 
            <Text 
                style={{
                    color: isPositive ? Colors.darkGreen : Colors.darkRed,
                    fontWeight:'bold'
                }}
            >
                <Text style={{color: isPositive ? Colors.lightGreen : Colors.lightRed,}}>{isPositive ? '↑' : '↓'}</Text>{Math.abs(value)}%
            </Text> 
        </View>
    )}

    const halfBoldTitle= (bolded, regular, subtitle) => (
      <View style={{flexDirection:'row', marginVertical:5}}>
        <Text style={[styles.text,{fontWeight:'500'}]}>{bolded} </Text>
        <Text style={styles.text}>{regular} </Text>
        {subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>
    )

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={()=>props.navigation.navigate('Detail',{item})}>
            <View style={styles.cardContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.title}><Text style={[styles.title,{fontWeight:'bold'}]}>{item.symbol}</Text> - {item.name}</Text>
                    <Text style={styles.subtitle}>#{item.rank}</Text>
                </View>

                <View style={styles.firsLine}>
                    <View style={styles.secondLine}>
                        {/* 💯  In this execercise you can round numbers without a library */}
                        <Text style={styles.price}> $ {parseFloat(item.priceUsd).toFixed(2)}</Text>
                        <Text style={styles.subtitle}> USD</Text>
                    </View>
                    {changePercent(moneyFormater(item.changePercent24Hr))}
                </View>
                <View>
                  {halfBoldTitle('Supply',moneyFormater(item.supply))}
                  {halfBoldTitle('Max Supply',moneyFormater(item.maxSupply))}
                  {halfBoldTitle('Market Cap $',moneyFormater(item.marketCapUsd), 'USD')}

                </View>
            </View>
        </TouchableWithoutFeedback>
        <Button
          text='My Wallet'
          onPress={()=>navigation.navigate('Wallet')}
          style={styles.button}
        />
    </View>

    )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    paddingVertical:15,
    backgroundColor:'transparent',
  },
  cardContainer: {
      backgroundColor: '#fff',
      paddingHorizontal:20,
      paddingVertical:15,
      width:'100%',
      marginVertical:10,
      justifyContent: 'center',
      borderColor:'lightgrey',
      borderRadius:10,
      elevation:10,
      shadowRadius:10,
  },
  title:{
      fontSize:22
  },
  firsLine:{
      flexDirection:'row', 
      justifyContent: 'space-between', 
      marginVertical:10
  },
  secondLine:{
      flexDirection:'row', 
      justifyContent:'flex-start'
  },
  subtitle:{
      color:'grey',
      fontSize:18,
      alignSelf: 'flex-end',
  },
  price:{
      fontSize:28,
      color: Colors.standardBlue,
      fontWeight: '700'
  },
  percentageBubble: {
      flexWrap: 'wrap',
      borderRadius:15,
      paddingVertical:5,
      paddingHorizontal:15,
      alignSelf: 'flex-end',
  },
  text:{
    fontSize:20
  },
  button:{
    marginTop:20
  }
});

const mockData = {
  data: {
    id: 'bitcoin',
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    supply: '17193925.0000000000000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '119179791817.6740161068269075',
    volumeUsd24Hr: '2928356777.6066665425687196',
    priceUsd: '6931.5058555666618359',
    changePercent24Hr: '-0.8101417214350335',
    vwap24Hr: '7175.0663247679233209',
  },
};

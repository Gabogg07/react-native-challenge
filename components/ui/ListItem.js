import React from 'react';
import { StyleSheet, View,TouchableWithoutFeedback, Text} from 'react-native';
import {Colors} from '../../constants/colors'
import {moneyFormater} from '../../constants/moneyFormater'

function ListItem({item, onPress}) {
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

  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}><Text style={[styles.title,{fontWeight:'bold'}]}>{item.symbol}</Text> - {item.name}</Text>
                <Text style={styles.subtitle}>#{item.rank}</Text>
            </View>

            <View style={styles.firsLine}>
                <View style={styles.secondLine}>
                    {/* 💯  In this execercise you can round numbers without a library */}
                    <Text style={styles.price}> $ {moneyFormater(item.priceUsd)}</Text>
                    <Text style={styles.subtitle}> USD</Text>
                </View>
                {changePercent(parseFloat(item.changePercent24Hr).toFixed(2))}

            </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});

export default ListItem;
import React, {useContext} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback, Linking } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../constants/colors';
import { Context } from '../context/Context'

const Tab = createBottomTabNavigator();
/**
 * ToDo: Create a Bottom Tab Navigation for: Account and Partners sections
 * ToDo: In the Account tab, print the name submited in the Sign-In form
 * ToDo: In the Partners tab, manually list some apps you create
 *
 * 💯 Published apps where you been involved is great plus
 */

function AccountSection() {
  const {username}= useContext(Context)

  return (
    <View style={styles.container}>
      <Image style={styles.illustration} source={require('../assets/finish-illustration.png')} />
      <Text style={styles.title}>Hello, {username}</Text>
      <Text>Glad you are here,</Text>
      <Text>hope to see you soon.</Text>
    </View>
  );
}

function PartnersSection() {
  const partnerList = [
    { name: 'UrijiJami', url: 'https://www.urijijami.com/', comments: 'Venezuelan Social Network involving regular interactions (chats, likes, follows, purchases, etc) developed in React Native. \n\n Worked on the architecture as the project was native development and part of my responsabilities was to migrate it to RN.\n\n I was in charge of teaching another intern, architecture decisions, manual appStore and playStore upload and managing, between other responsabilities.' },
    { name: 'Multimoney', url: 'https://www.multimoney.com/', comments: 'Trasnational financial app involving loans, savings accounts, payments, credit management and crypto sales.\n\n Working as team leader for a team of 5-7 developers, I have been in charge of technical decisions withing the app, time deliveries and projections, store uploads (via Bitrise) and managing, between others. \n\n I have mantained a native iOS and android module, not my strong point but have had some experience with it' },
  ];

  const ListItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={()=>{Linking.openURL(item.url);}}>
          <View style={styles.cardContainer}>
            <Text style={styles.partnerTitle}>{item.name}</Text>
            <Text style={styles.partnertCardText}>{item.comments}</Text>
            <Text style={styles.partnertCardText}>URL: <Text style={{color:Colors.standardBlue}}>{item.url}</Text></Text>
          </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={[styles.container, styles.partnersContainer]}>
      <View style={{marginVertical:10, justifyContent:'center', alignItems: 'center'}}>
        <Text style={styles.title}>Partners</Text>
        <Text>Here are some apps I was involved in:</Text>
      </View>
      {partnerList && partnerList.length > 0 ? (
        <ScrollView>
          {partnerList.map((item) => (
            <ListItem key={item.name} item={item} />
          ))}
        </ScrollView>
      ) : (
        <Text>No Apps 🙈</Text>
      )}
    </View>
  );
}

export default function WalletScreen() {
  const customTabBarStyle = {
    activeTintColor: Colors.standardBlue,
    labelStyle: styles.tabText,
    tabStyle: styles.tab,
    style: styles.tabBar,
  }
  return (
    <Tab.Navigator
      tabBarOptions={customTabBarStyle}
    >
      <Tab.Screen name="AccountSection" component={AccountSection} options={{tabBarLabel: 'Account',}}/>
      <Tab.Screen name="PartnersSection" component={PartnersSection} options={{tabBarLabel: 'Partners',}}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  partnersContainer:{
    backgroundColor:'transparent', 
    paddingHorizontal:20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  illustration: {
    width: 256,
    height: 160,
  },
  itemContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    marginVertical: 6,
    padding: 8,
  },
  tabBar:{
    justifyContent:'flex-start', 
    alignItems: 'center', 
    height:90,
  },
  tabText:{
    fontSize: 18,
    fontWeight: '700',
  },
  tab:{
    marginHorizontal:10, 
    borderTopColor: Colors.standardBlue, 
    borderTopWidth:2, 
    paddingBottom:10
  },
  cardContainer:{
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
  partnerTitle:{
    color: Colors.standardBlue, 
    fontWeight:'bold', 
    fontSize:20, 
    marginVertical:5
  },
  partnertCardText:{
    fontSize:20, 
    marginVertical:5
  }
});

import React, {createContext, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoScreen from './screens/ToDoScreen';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import WalletScreen from './screens/WalletScreen';
import { Context, Provider } from './context/Context';
/**
 * Use `HomeScreen` as the initial route
 * Replace the screen title with the `Logo` component
 *
 * 💯  Usage of TypeScript is a plus
 */

import Logo from './components/ui/Logo';

const Stack = createStackNavigator();
export const context = createContext({});

function App() {
  const [username, setUsername] = useState('')

  return (
    <Provider>
      <Context.Consumer>
        {()=>(
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="ToDo" component={ToDoScreen} />
              <Stack.Screen name="List" component={ListScreen} />
              <Stack.Screen name="Detail" component={DetailScreen} />
              <Stack.Screen name="Wallet" component={WalletScreen} />
              <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ 
                  headerTitle: () => <Logo width={30} height={25} /> 
                }}
              />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </NavigationContainer>
        )}
      </Context.Consumer>
    </Provider>
  );
}

export default App;

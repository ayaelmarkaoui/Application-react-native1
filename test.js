
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FilmDesc from '../component/FilmDesc';
import FilmInfo from '../component/FilmInfo';
import Search from '../component/search';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../component/home';
import Scream from '../component/Scream';
import Avatar from '../component/Avatar';


const Stack = createStackNavigator();
const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Scream" component={Scream} />
            <Stack.Screen name="Avatar" component={Avatar} />
        </Stack.Navigator>
      </NavigationContainer>
    );
   
    };
 
  export default MyStack;
  
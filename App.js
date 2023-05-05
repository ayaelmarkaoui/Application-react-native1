import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilmDesc from './component/FilmDesc';
import FilmInfo from './component/FilmInfo';
import MyStack from './navigation/test';
import {NavigationContainer} from '@react-navigation/native';
import Search from './component/search';
import Home from './component/home';
import Scream from './component/Scream';
import Avatar from './component/Avatar';


export default function App() {
  return (
    //<FilmInfo/>
    <MyStack/>
    //<FilmDesc/>
    //<Search/>
    //<Home/>
   //<Scream/>
    //<Avatar/> 

   
    //  <MyStack/>

     
 
    
  );
}
//npx expo start 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  
});

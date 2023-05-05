import React, { Component } from 'react';
import { View,Text,Image,StyleSheet,ImageBackground, TouchableOpacity } from 'react-native';
import Search from './search';
import {FontAwesome5,Feather,MaterialIcons} from "@expo/vector-icons"
class Scream extends React.Component{
    render(){
   
        return (
            <ImageBackground style = {styles.ImageBg} source={require("../assets/scream.png")}
                    blurRadius={10}>
                    <View style={styles.golbal_container_style}>
                        <Image source={require("../assets/scream.png")}  style={styles.image_style}/>
                        
                    </View>
                    <View style={styles.content_style}>   
                    <Text style={{color:'white',fontWeight:'bold',fontSize:30}}>Scream</Text>
                    <Feather name="heart" size={30} color="red" style={styles.coeur}/>
                    <Text style={styles.textStyle}>Après avoir frappé à trois reprises à Woodsboro, après avoir terrorisé le campus de Windsor et les studios d’Hollywood, Ghostface a décidé de sévir dans Big Apple, mais dans une ville aussi grande que New York personne ne vous entendra crier…</Text>
                    </View>


            </ImageBackground>
            
                
        )
    }
}
const styles = StyleSheet.create({
    golbal_container_style:{
        flex: 1,
        top:10,
        justifyContent: 'center',
        alignItems: 'center', 
               
   },
   CarouselContainer:{
       flex:1,
       backgroundColor:'#000',
       height:720,
   
   },
   image_style:{
       flex:3,
       width:500,
       height:50,
       justifyContent: 'center',
       alignItems: 'center', 

       
   },
   coeur:{
       top:20
   },
   ImageBg:{
       flex:1,
       width:'100%',
       opacity:1,
       justifyContent:'flex-start',
       height:1000,

   },
   vote_style:{
       fontSize:16,
       fontWeight:"bold",
       color:'#fff'
   },
   textStyle:{
       color:'#fff',
       top:20,
       flex:2,
       flexDirection:'row',

   },
   content_style:{
       flex:1,
       top:10,
       justifyContent: 'center',
       alignItems: 'center',
   },
   
   date_style:{
       textAlign:'right',
       color:'#fff'
   }
   

})

export default Scream;
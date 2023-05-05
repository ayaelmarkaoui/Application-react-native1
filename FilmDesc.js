import React, { Component } from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
 
export default class FilmDesc extends React.Component{
    render(){
        return(
            <View>
                <View style={styles.global_container_style}> 
                <Image style={styles.image_style} source={require("../assets/avatar.jpg")}/>
                <Text style={styles.container_style}>Avatar</Text>

                </View>
                <View style={styles.global_container_style}> 
                <Image style={styles.image_style} source={require("../assets/scream.png")}/>
                <Text style={styles.container_style}>Scream  VI(2023)</Text>

                </View>

            </View>
        )

    }
}
const styles = StyleSheet.create({
    global_container_style:{
        height:190,
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    image_style:{
        width:180,
        height:180,
        margin:10,
        backgroundColor:'pink'
    },
    container_style:{
        flex:1,
        //par defaut les elements sont aligne d'ine maniere verticlae dons on na pas besoin flexdirection
        margin:5
    },

})

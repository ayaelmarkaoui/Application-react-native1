import React, { Component } from 'react';
import { View,Text,Image,StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Search from './search';
import Scream from './Scream';
import Avatar from './Avatar';
import { Button } from 'react-native-web';


//creation du component
const FilmInfo = () =>{
    const navigation = useNavigation();

        return (
            
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Scream')}>
                    <View style={styles.golbal_container_style}>
                        <Image style={styles.image_style} source={require("../assets/scream.png")}></Image>
                        <View style={styles.container_style}>
                        <View style={styles.header_style}>
                            <Text style={styles.title_style}>Scream VI(2023)</Text>
                            <Text style={styles.vote_style}>7.4</Text>
                        </View>
                        <View style={styles.content_style}>
                        <Text style={styles.textStyle}>Après avoir frappé à trois reprises à Woodsboro, après avoir terrorisé le campus de Windsor et les studios d’Hollywood, Ghostface a décidé de sévir dans Big Apple, mais dans une ville aussi grande que New York personne ne vous entendra crier…</Text>
                        </View>
                        <View style={styles.footer_style}>
                            <Text style={styles.date_style}>10/03/2023</Text>
                        </View>
                        </View>
                    
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={()=>navigation.navigate('Avatar')} >
                    <View style={styles.golbal_container_style}>
                        <Image style={styles.image_style} source={require("../assets/avatar.jpg")}></Image>
                        <View style={styles.container_style}>
                            <View style={styles.header_style}>
                                <Text style={styles.title_style}>Avatar</Text>
                                <Text style={styles.vote_style}>7.6</Text>
                            </View>
                        <View style={styles.content_style}>
                            <Text style={styles.textStyle}>Un marine paraplégique, envoyé sur la lune Pandora pour une mission unique, est tiraillé entre suivre ses ordres et protéger le monde qu'il considère dorénavant comme le sien.</Text>
                        </View>
                        <View style={styles.footer_style}>
                            <Text style={styles.date_style}>18/12/2009</Text>
                        </View>
                        </View>
                    
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.golbal_container_style}>
                        <Image style={styles.image_style} source={require("../assets/miraco.png")}></Image>
                        <View style={styles.container_style}>
                            <View style={styles.header_style}>
                                <Text style={styles.title_style}>Miraculous, les aventures de Ladybug et Chat Noir (2015)</Text>
                                <Text style={styles.vote_style}>8.1</Text>
                            </View>
                            <View style={styles.content_style}>
                                <Text style={styles.textStyle}>Paris, aujourd'hui. Marinette et Adrien sont deux collégiens comme les autres, à la différence près qu’ils ont été choisis pour sauver Paris ! Leur mission : capturer les Akumas du mystérieux Papillon qui transforment les parisiens en super vilains. Grâce à leur kwami, nos deux collégiens se métamorphosent en superhéros : Ladybug, et Chat Noir.</Text>
                            </View>
                            <View style={styles.footer_style}>
                                <Text style={styles.date_style}>03/09/2015</Text>
                            </View>
                        </View>
                    
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.golbal_container_style}>
                        <Image style={styles.image_style} source={require("../assets/lucifer.png")}></Image>
                        <View style={styles.container_style}>
                            <View style={styles.header_style}>
                                <Text style={styles.title_style}>Lucifer (2016)</Text>
                                <Text style={styles.vote_style}>8.5</Text>
                            </View>
                            <View style={styles.content_style}>
                                <Text style={styles.textStyle}>Lassé d’être le Seigneur des Enfers, le diable s’installe à Los Angeles où il ouvre un nightclub et se lie avec une policière de la brigade criminelle...</Text>
                            </View>
                            <View style={styles.footer_style}>
                                <Text style={styles.date_style}>13/10/2016</Text>
                            </View>
                        </View>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.golbal_container_style}>
                        <Image style={styles.image_style} source={require("../assets/horloge.png")}></Image>
                        <View style={styles.container_style}>
                            <View style={styles.header_style}>
                                <Text style={styles.title_style}>L'horloge (2023)</Text>
                                <Text style={styles.vote_style}>7.5</Text>
                            </View>
                            <View style={styles.content_style}>
                                <Text style={styles.textStyle}>Ella est une star montante de la décoration d'intérieur. Elle vit dans une maison digne d'un magazine et est mariée à un mari aimant. Mais Ella est une paria sociale parce qu'elle ne veut pas d'enfants. Lorsqu'elle apprend l'existence d'un essai clinique où son problème est considéré comme un problème de fertilité, elle décide de s'y inscrire. À sa grande surprise, le traitement fonctionne, mais à quel prix ?
                                </Text>
                            </View>
                            <View style={styles.footer_style}>
                                <Text style={styles.date_style}>28/03/2023</Text>
                            </View>
                        </View>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.golbal_container_style}>
                        <Image style={styles.image_style} source={require("../assets/citadel.png")}></Image>
                        <View style={styles.container_style}>
                        <View style={styles.header_style}>
                            <Text style={styles.title_style}>Citadel (2012)</Text>
                            <Text style={styles.vote_style}>5.4</Text>
                        </View>
                        <View style={styles.content_style}>
                        <Text style={styles.textStyle}>Un jeune père de famille, agoraphobe suite à l'agression de sa femme, s'associe avec un prêtre afin de sauver sa fille des griffes d'une bande de sauvages tordus et ultra-violents. Pour se libérer de ses peurs, il va devoir affronter ses démons et pénétrer dans le lieu qui l'effraie le plus au monde: la Citadelle.</Text>
                        </View>
                        <View style={styles.footer_style}>
                            <Text style={styles.date_style}>13/07/2012</Text>
                        </View>
                        </View>
                    
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.golbal_container_style}>
                    <Image style={styles.image_style} source={require("../assets/evil.png")}></Image>
                    <View style={styles.container_style}>
                    <View style={styles.header_style}>
                        <Text style={styles.title_style}>Evil Dead Rise (2023)</Text>
                        <Text style={styles.vote_style}>7.0</Text>
                    </View>
                    <View style={styles.content_style}>
                    <Text style={styles.textStyle}>La réunion de deux sœurs, séparées, est interrompue par l'apparition de démons possesseurs de chair, les entraînant dans une bataille primitive pour leur survie, alors qu'elles font face à la version de la famille la plus cauchemardesque que l'on puisse imaginer.
                    </Text>
                    </View>
                    <View style={styles.footer_style}>
                        <Text style={styles.date_style}>21/04/2023</Text>
                    </View>
                    </View>
                
                </View>
                </TouchableOpacity>
            </View>
        )
    }


const styles = StyleSheet.create({
    golbal_container_style:{
        flexDirection:"row",
        height:190,

    },
    image_style:{
        width:120,
        height:180,
        margin:10,
        backgroundColor:'pink'
    },
    container_style:{
        flex:1,
        //par defaut les elements sont aligne d'ine maniere verticlae dons on na pas besoin flexdirection
        margin:5
    },
    header_style:{
        flexDirection:"row",
        flex:3//combien va occuper de l'espace de parent
    },
    title_style:{
        fontSize:20,
        fontWeight:"bold",
        flex:1,
        flexwrap:'wrap',
        color:'#fff'
    },
    vote_style:{
        fontSize:16,
        fontWeight:"bold",
        color:'#fff'
    },
    textStyle:{
        color:'#fff'

    },
    content_style:{
        flex:6,
        color:'#fff'
    },
    footer_style:{
        flex:1
    },
    date_style:{
        textAlign:'right',
        color:'#fff'
    }
    

})

export default FilmInfo;

import { StyleSheet,Text,View,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,ImageBackground,TextInput,FlatList } from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import {FontAwesome5,Feather,MaterialIcons} from "@expo/vector-icons"
import React, { useState,useRef,useEffect} from 'react';
import FilmInfo from './FilmInfo';
const Home = () =>{
    const [gallery, setgallery] = useState([
 
        { image:'https://cinemaparamount.com/documents/medias/affiche/3npygfmEhqnmNTmDWhHLz1LPcbA.jpg', title: 'Avatar',released: '18/12/2009 ‧ Action/Sci-fi ‧ 3h 2m' ,key: '1' , desc: 'nord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.' },
        {image:'https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_.jpg', title: 'Boss Baby',released: '2017 ‧ Animation/Musical ‧ 1h 43m',  key: '2' , desc: 'Un garçon de sept ans, nommé Tim, voit arriver son nouveau petit frère (Baby Boss), qui menace son équilibre familial. Quand il va en mission pour reconquérir l\'affection de ses parents, il découvre un complot secret auquel son petit frère est mêlé et qui menace de déstabiliser l\'équilibre de l\'amour dans le monde. ' },
        { image:'https://m.media-amazon.com/images/M/MV5BYjhkNzNjNzYtMzkzOS00NmM3LWJhZmUtNWIyYTc3OTc0MjNkXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_FMjpg_UX1000_.jpg', title: 'Kill bokstoon',released: '2023 ‧ Action/Sci-fi ‧ 2h 2m',key: '3', desc: 'Gil Boksoon est tueuse à gages employée par une agence / organisation mafieuse. Mais elle est aussi mère d\'une ado qu\'elle a bien du mal à éduquer malgré tout l\'amour qu\'elle lui porte.' },
        { image:'https://hips.hearstapps.com/hmg-prod/images/best-teen-movies-2023-magic-flute-640755619b5a5.jpg', title: 'The Irish Man',released: '2019 ‧ Crime/Drama ‧ 3h 30m', key: '4', desc: 'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa.' },
        { image:'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg', title: 'John Wick Chapter 3',released: '2019 ‧ Action/Thriller ‧ 2h 10m', key: '5', desc: 'John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.' },
      ]);

      const carouselRef = useRef(null);


      const {width, height} = Dimensions.get('window');
      
      
      const renderItem = ({item, index}) => {
        return (
            <View>
                
                <TouchableOpacity  onPress={() => 
                        { 
                            carouselRef.current.scrollToIndex(index);
                            setBackground
                            ({
                                    uri: item.image,
                                    name: item.title,
                            })
                        }
                    }>
                    <Image source={{uri: item.image}} style={styles.carouselImage} />
                    <Text style={styles.carouselText}>{item.title}</Text>
                </TouchableOpacity>
         
            </View>
        
        )
      }
      
    return (

            <View style ={styles.CarouselContainer}>
                <View style={{...StyleSheet.absoluteFill,backgroundColor:'#000'}}>
                    <ImageBackground style = {styles.ImageBg} source={require("../assets/2.jpg")}
                    blurRadius={10}//pour mettre background en flou
                    >
                        <ScrollView>
                        <View style={styles.SearchBoxContainer}>
                            <TextInput placeholder='Search Movies'
                            placeholderTextColor='#666'
                            style={styles.SearchBox}
                            />
                           <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon}/>
                        </View>
                        
                        <Text style={styles.textStyle}>
                            Top Movie this Week
                        </Text>
                        
                        <View style={styles.carouselContainerView}>
                            
                             <Carousel style={styles.carousel}
                                data={gallery}
                                renderItem={renderItem}
                                itemWidth={500}
                                containerWidth={width - 20} 
                                separatorWidth={0}
                                ref={carouselRef}
                                inActiveOpacity={0.4}
                                pagingEnable={true}
                                minScrollDistance={20}
                             
                             />
                            
                        </View>
                       
                        <Text style={styles.textStyle}>
                            Mylist
                        </Text>
                        <FilmInfo/>

                        </ScrollView>
                        
                        

                    </ImageBackground>
                </View>
                
            </View>
            
       
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
    },
    scrolContainer:{
        flex:1

    },
    CarouselContainer:{
        flex:1,
        backgroundColor:'#000',
        height:720,
        paddingHorizontal:14
    },
    ImageBg:{
        flex:1,
        height:2000,
        width:'100%',
        opacity:1,
        justifyContent:'flex-start'
    },
    SearchBoxContainer:{
        backgroundColor:'#fff',
        elevation:10,//box shadow
        borderRadius:4,
        marginVertical:10,
        width:'80%',
        flexDirection:'row',
        alignSelf:'center',
        top:30,
    },
    SearchBox:{
        padding:12,
        paddingLeft:20,
        fontSize:16,

    },
    searchBoxIcon:{
        position:'absolute',
        right:30,
        top:10
    },
    textStyle:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold',
        marginLeft:10,
        marginVertical:30,

    },
    carouselContainerView: {
        width: '100%',
        height:300 ,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:6,
    },
      carousel: {
        flex:1,
        overflow: 'visible',
    },
    carouselImage:{
        width:200,
        height:320,
        borderRadius:10,
        backgroundColor:'rgba(0,0,0,0.9)',
        
    },
    carouselText:{
        padding:14,
        color:'white',
        position:'absolute',
        bottom:10,
        left:2,
        fontWeight:'bold'
    }

})
export default Home;
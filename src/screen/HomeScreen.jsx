import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
// import Icon from "react-native-vector-icons/FontAwesome"
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from "react-native-vector-icons/Fontisto"
import Category from '../components/Category';


const categories=['Trending Now', 'All', 'New', 'Mens', 'Womens']

const HomeScreen = () => {
    const [selectedcategory, setSelectedcategory] =useState('Trending Now')
  return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <Header />
            <Text style={styles.matchtext}>Match Your Style </Text>


            <View style={styles.inputcontainer}>
                <View style={styles.iconcontainer}>
                    <Fontisto name={"search"} color={"#C0C0C0"} size={20} />
                </View>
                <TextInput style={styles.textinput} placeholder='Search' />
            </View>

            <FlatList 
            data={categories} 
            renderItem={({item}) => (
            <Category 
                item={item} 
                selectedcategory={selectedcategory} 
                setSelectedcategory={setSelectedcategory}/>
            )}

            keyExtractor={(item)=>item} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} />
        </LinearGradient>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex : 1,
        padding:20,
    },
    matchtext:{
        fontSize:28,
        color:"#000000",
        marginTop: 25,
        textAlign:"center"
    },
    inputcontainer:{
        backgroundColor:"white",
        height:48,
        borderRadius:12,
        alignItems:"center",
        flexDirection:"row",
        marginVertical:10
    },
    iconcontainer:{
        marginHorizontal:15
    },
    textinput:{
        flex:1 ,

    }
})
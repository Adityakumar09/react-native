import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"

const Productcard = ({isLiked,setIsLiked}) => {

  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/girll.png")} 
        style={styles.coverimage}/>
      
      <View style={styles.content}>
        <Text style={styles.title}>Jacket Jeans</Text>
        <Text style={styles.price}>$1.67</Text>
      </View>

      <TouchableOpacity onPress={()=> {
        setIsLiked(!isLiked);
      }} style={styles.heartcontainer} >
        {isLiked
        ? (<AntDesign name={"heart"} size={20} color={"#E55B5B"} />) 
        : (<AntDesign name={"hearto"} size={20} color={"#E55B5B"} />) }
      </TouchableOpacity>
    </View>
  )
}

export default Productcard

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    position:"relative",
  },
  coverimage:{
    height:256,
    width:"90%" ,
    borderRadius:20 ,
    marginVertical:10,
    marginLeft:10,
  },
  content:{
    paddingLeft:15,
    marginTop:10,
  },
  title:{
    fontSize:18,
    color:"#444444",
    fontWeight:"600",
  },
  price:{
    fontSize:18,
    color:"#9C9C9C",
    fontWeight:600,
  },
  heartcontainer:{
    backgroundColor:"white",
    height:34,
    width:34,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:17,
    position:"absolute",
    top:20,
    right:20,
  },
})
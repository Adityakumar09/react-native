import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({item,selectedcategory,setSelectedcategory}) => {
  return (
    <TouchableOpacity onPress={()=>setSelectedcategory(item)} >
      <Text style={[
        styles.categorytext ,
        selectedcategory===item && {color:"#FFFFFF", backgroundColor:"#E96E6E"} ]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    categorytext:{
        fontSize:16,
        fontWeight:"600",
        color:"#938F8F",
        // color:"#FFFFFF",
        // backgroundColor:"#E96E6E",
        backgroundColor:"#DFDCDC",
        paddingVertical:10,
        textAlign:"center",
        borderRadius:16,
        marginHorizontal:10,
        paddingHorizontal:20 ,
        marginTop:10
    },
})
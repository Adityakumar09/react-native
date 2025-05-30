import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.appiconcontainer}>
            <Image source={require("../assets/appicon.png")} style={styles.appicon} />
        </View>
      <View style={styles.appiconcontainer}>
            <Image source={require("../assets/dp.png")} style={styles.dp} />
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent : "space-between",
        // backgroundColor:"blue",
        alignItems:"center"
    },
    appiconcontainer:{
        backgroundColor:"white",
        height: 44,
        width:44,
        borderRadius:"center",
        justifyContent:"center",
        alignItems:"center",
    },
    appicon:{
        height:28 ,
        width: 28 , 
    },
    dp:{
        height:44 ,
        width:44 ,
        borderRadius: 22
    },
})
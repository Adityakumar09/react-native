import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"

const Tab = createBottomTabNavigator();

function Home(){
  return(
    <View>
      <Text>
        Home
      </Text>
    </View>
  );
}

const App = () => {
  return (
      <NavigationContainer >
        {/* header is hidden , label also in bottom navbar. active navbar colour  */}
        <Tab.Navigator screenOptions={{headerShown:false ,tabBarShowLabel:false,  tabBarActiveTintColor: "#E96E6E"}}> 
          <Tab.Screen name='HOME' component={HomeScreen} options={{
            tabBarIcon:({size,focused,color})=>{
              return(
                <Entypo name="home" size={size} color={color} ></Entypo>
              )
            }
          }} />
          <Tab.Screen name='REORDER' component={HomeScreen} options={{
            tabBarIcon:({size,color})=>{
              return(
                <MaterialIcons name="reorder" size={size} color={color} ></MaterialIcons>
              )
            }
          }} />
          <Tab.Screen name='CART' component={HomeScreen} options={{
            tabBarIcon:({size,color})=>{
              return(
                <MaterialCommunityIcons name="cart" size={size} color={color} ></MaterialCommunityIcons>
              )
            }
          }} />
          <Tab.Screen name='ACCOUNT' component={HomeScreen} options={{
            tabBarIcon:({size,color})=>{
              return(
                <FontAwesome6 name="user" size={size} color={color} ></FontAwesome6>
              )
            }
          }} />
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
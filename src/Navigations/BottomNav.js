import { View,Text,StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen"
import ProfileScreen from "../Screens/ProfileScreen"
import { Center } from "native-base";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import Colors from "../color";
const Tab = createBottomTabNavigator()
const customTab= ({children,onPress})=>(<Text>hh</Text>)

const BottomNav = ()=>{
    return(
        <Tab.Navigator backBehavior="main" initialRouteName="Main" screenOptions={{
           tabBarShowLabel:false,
           tabBarStyle:{...styles.tab},
            headerShown:false,
            tabBarHideOnKeyboard:true
        }}>
            <Tab.Screen name="Main" component={HomeScreen} options={{
                tabBarIcon:({focused})=>(
                    <Center>
                        {focused ?(
                            <Entypo name="home" size={24} color={Colors.main}/>
                        ):(<AntDesign name="home" size={24} color={Colors.black}/>)}
                    </Center>
                )
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon:({focused})=>(
                    <Center>
                        {focused ?(
                            <FontAwesome name="user" size={24} color={Colors.main}/>
                        ):(<AntDesign name="user" size={24} color={Colors.black}/>)}
                    </Center>
                )
            }}/>
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    tab:{
        elevation:0,
        backgroundColor:Colors.white,
        height:60,
    },
})

export default BottomNav
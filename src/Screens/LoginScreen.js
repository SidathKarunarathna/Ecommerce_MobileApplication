import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import { MaterialIcons,AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {  Modal,Pressable,StyleSheet } from "react-native";



function LoginScreen({navigation}) {
  const [showModel, setShowModel] = useState(false);
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>LOGIN</Heading>
        <VStack space={5} pt={6}>
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            //fontSize="md"
            w="70%"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline} //
          />
          {/*PASSWORD*/}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            //fontSize="md"
            variant="underlined"
            placeholder="***********"
            w="70%"
            pl={2}
            type="password"
            color={Colors.main}
            borderBottomColor={Colors.underline} //
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={()=> navigation.navigate("Bottom")}
        >
          LOGIN
        </Button>
        <Pressable mt={4}  onPress={()=> navigation.navigate("Register")}>
          <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
      <Modal
                animationType="slide"
                transparent={true}
                visible={showModel}
                onRequestClose={() => {
                    setShowModel(!showModel);
                }}>
                
                <View style={styles.modelview}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.modelText}>ERROR </Text>
                        <Pressable style={{ alignItems: "flex-end" }} onPress={() => setShowModel(!showModel)}>
                            <AntDesign name="close" size={24} color="black" />
                        </Pressable>
                    </View>
                    <VStack space={2}>
                        <Text style={styles.bodyText1}>Email or Password Incorrect</Text>
                    </VStack>
                    <Button 
                    bg={Colors.main}
                    h={45}
                    _text={{color:Colors.white}}
                    onPress={()=> setShowModel(false)}
                    _pressed={{bg:Colors.red}}
                    >
                        OK
                    </Button>
                </View>
            </Modal>
    </Box>
  );
}
const styles = StyleSheet.create({

  modelview: {
      margin:20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      justifyContent: "center",
      marginTop:100
     

  },
  modelText: {
      marginLeft:0,
      fontSize: 36,
      width: "85%",
      lineHeight: 36
      
  },
  bodyText1:{
     padding:20,
     fontSize:16,
     flex:1,
     alignItems:Center

  },
  

});
export default LoginScreen;

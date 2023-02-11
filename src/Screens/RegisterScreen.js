import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function RegisterScreen({ navigation }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState()
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    console.log(JSON.stringify({ name, email, password }))
    // To handle user requests
    fetch("http://192.168.8.198:5000/user/sign-up", {
      method: "POST", headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, //POST data
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.message == "success"){
          navigation.navigate("Login");
        }
        
      })
      .catch((e) => {
        console.log(e)
        setError(e);
      })
      .finally(() => {
      });
  };

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
        <Heading>SIGN UP</Heading>
        <VStack space={5} pt={6}>
          {/*USERNAME*/}
          <Input
            InputLeftElement={
              <MaterialIcons name="person" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="John Doe"
            //fontSize="md"
            w="70%"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
            value={name}
            onChangeText={(value) => setName(value)}
          />
          {/*EMAIL*/}
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
            borderBottomColor={Colors.underline}
            value={email}
            onChangeText={(value) => setEmail(value)}
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
            value={password}
            onChangeText={(value) => setPassword(value)}
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
          onPress={handleSubmit}
        >
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>

      </Box>
    </Box>
  );
}
export default RegisterScreen;
